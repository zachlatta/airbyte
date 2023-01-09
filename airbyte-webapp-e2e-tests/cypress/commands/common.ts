export const submitButtonClick = () => {
  cy.get("button[type=submit]").click();
};

export const updateField = (field: string, value: string) => {
  cy.get(`input[name='${field}']`).clear().type(value);
};

export const openSettingForm = (name: string) => {
  cy.get("div").contains(name).click();
  cy.get("div[data-id='settings-step']").click();
};

export const deleteEntity = () => {
  cy.get("button[data-id='open-delete-modal']").click();
  cy.get("button[data-id='delete']").click();
};

export const clearApp = () => {
  indexedDB.deleteDatabase("firebaseLocalStorageDb");
  cy.clearLocalStorage();
  cy.clearCookies();
};

export const fillEmail = (email: string) => {
  cy.get("input[name=email]").type(email);
};

// useful for ensuring that a name is unique from one test run to the next
export const appendRandomString = (string: string) => {
  const randomString = Math.random().toString(36).substring(2, 10);
  return `${string} _${randomString}`;
};

// we are not currently able to access the const files for these directly from the webapp
// longterm, we should be pulling these directly from there!

export const connectorsIds = {
  sources: { AwsCloudTrail: "6ff047c0-f5d5-4ce5-8c81-204a830fa7e1" },
  destinations: {
    AwsDatalake: "99878c90-0fbd-46d3-9d98-ffde879d17fc",
  },
};
