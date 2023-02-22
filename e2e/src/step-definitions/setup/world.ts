import playwright, { //import all the playwright functions
    BrowserContextOptions,
    Page,
    Browser,
    BrowserType,
    BrowserContext
} from "playwright"; // make sure this is showing only playwright and not playwright/test
import { env } from '../../env/parseEnv'
import { //importing cucumber world functions
    World,
    IWorldOptions,
    setWorldConstructor
} from "@cucumber/cucumber"; // leave as is

import { GlobalConfig, GlobalVariables } from "../../env/global";
 
export type Screen = { // create a  new type and export it so its acceptable
    browser: Browser;
    context: BrowserContext;
    page: Page;
}
 
export class ScenarioWorld extends World {
    constructor(options: IWorldOptions) {
        super(options);

        this.globalConfig = options.parameters as GlobalConfig;
        this.globalVariables = {}
    }

    globalConfig: GlobalConfig;

    globalVariables: GlobalVariables;

    screen!: Screen;
 
    async init(contextOptions?: BrowserContextOptions): Promise<Screen> {
        await this.screen?.page.close();
        await this.screen?.context?.close();
        await this.screen?.browser?.close()
 
        const browser = await this.newBrowser();
        const context = await browser.newContext(contextOptions);
        const page = await context.newPage();
 
        this.screen = { browser, context, page };
        return this.screen
    }
 
    private newBrowser = async  (): Promise<Browser> => {
 
        const automationBrowsers = ['chromium', 'firefox', 'webkit']
        type AutomationBrowser = typeof automationBrowsers[number]
        const automationBrowser = env('UI_AUTOMATION_BROWSER') as AutomationBrowser
 
        const browserType: BrowserType = playwright[automationBrowser];
        const browser = await browserType.launch( {
            devtools: process.env.DEVTOOLS !== 'false',
            headless: process.env.HEADLESS !== 'false',
            args: ['--disable-features=IsolateOrigins,site-per-process']
        })
        return browser;
 
 
}
}
 
setWorldConstructor(ScenarioWorld)

