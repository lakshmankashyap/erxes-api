export const types = `
  type Form {
    _id: String!
    title: String
    code: String
    description: String
    callout: JSON
    createdUserId: String
    createdDate: Date
  }
`;

const commonFields = `
  title: String!,
  description: String,
  callout: JSON
`;

export const mutations = `
  formsAdd(${commonFields}): Form
  formsEdit(_id: String!, ${commonFields} ): Form
  formsRemove(_id: String!): String
  formsDuplicate(_id: String!): Form
`;

export const queries = `
  forms(page: Int, perPage: Int): [Form]
  formDetail(_id: String!): Form
  formsTotalCount: Int
`;
