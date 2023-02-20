

# Cheatsheet

## Navigation 

Example

`Given I am on the "elementKey" page`

`When I am directed to the "elementKey" page`

Step Definition
```
`/^I am on the "([^"]*)" page$/,`
/^I am directed to the "([^"]*)" page$/,
// Located: e2e/src/step-definitions/navigation.ts
```

## Interactions

**Check Box**

Example

`And I check the "elementKey" check box`

`And I uncheck the "elementKey" check box`

Step Definition
```
/^I (check)?(uncheck)? the "([^"]*)" (?:check box|radio button)$/,
// Located: e2e/src/step-definitions/check.ts
```

**Radio Button**

Example

Then I check the "elementKey" radio button

Step Definition
```
/^I click the "([^"]*)" (?:button|link|icon|element)$/,
// Located: e2e/src/step-definitions/check.ts
```

**Forms**

Example

`And I fill in the "elementKey" input with "Blah"`

`And I select the "elementKey" option from the "elementKey"`

Step Definition
```
/^I fill in the "([^"]*)" input with "([^"]*)"$/,
/^I select the "([^"]*)" option from the "([^"]*)"$/
// Located e2e/src/step-definitions/form.ts
```

**Click**

Example

`And I click the "elementKey" button`

Step Definition
```
`/^I click the "([^"]*)" (?:button|link|icon|element)$/,
// Located e2e/src/step-definitions/check.ts
```

### Verification

**Verify Element Checked**

`And the "elementKey" radio button should be checked`

`And the "elementKey" radio button should not be checked`

Step Definition
```
/^the "([^"]*)" (?:check box|radio button) should( not)? be checked$/,
// Located e2e/src/step-definitions/assertions/verifiy-element-checked.ts
```

**Verify Element Value**

Example

`And the "elementKey" should contain the text "Blah"`

`And the "elementKey" should not contain the text "Blah"`

`And the "elementKey" should equal the text "Blah"`

`And the "elementKey" should not equal the text "Blah"`

`And the "elementKey" should contain the value "Blah"`

`And the "elementKey" should not contain the value "Blah"`

`And the "elementKey" should equal the value "Blah"`

`And the "elementKey" should not equal the value "Blah"`

Step Definition
```
/^the "([^"]*)" should( not)? contain the text "(.*)"$/,
/^the "([^"]*)" should( not)? equal the text "(.*)"$/,
/^the "([^"]*)" should( not)? contain the value "(.*)"$/,
/^the "([^"]*)" should( not)? equal the value "(.*)"$/,
// Located e2e/src/step-definitions/assertions/verifiy-element-value.ts
```

**Verify Element Visibility**

Example

`And the "elementKey" should be displayed`

`And the "elementKey" should not be displayed`

Step Definition
```
/^the "([^"]*)" should( not)? be displayed$/,
Located e2e/src/step-definitions/assertions/verifiy-element-visibility.ts
```

## ElementKeys

Element keys are stored within `e2e/config/mappings/` within various json files. Each json file correlates to a specific page within the application. Within the json file, we enter unique names and ids for elements that need to get passed through our cucumber steps. 

For example:
```
{
    "contacts header" : "[data-id='contacts']",
    "create" : "[data-id='add-button']",
    "search": "[data-id='search']",
    "full name label": "[data-id='full-name-label']",
    "name": "[data-id='name']",
    "gender label": "[data-id='gender-label']",
    "address label": "[data-id='address-label']",
    "address": "[data-id='address']",
    "edit": "[data-id='edit-button']",
    "delete": "[data-id='delete-button']",
    "contact": "[data-id='contact']"
}
```
The above is a selection of elementKeys that exist within the Home page of the application. The following cucumber statement would read the json file and try to match one of the elementKeys.

`And I click the "create" button`

TBC....
