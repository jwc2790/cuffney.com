# v2.cuffney.com

> Joe Cuffney's portfiolio site.

### Requirements

- Node

### Protected Branches

- master

### Development

- npm run start

### Deployment

Staging:

- password projected (dev.cuffney.com)
  - NOTE: you cannot use the aws cli to deploy the packaged.yml file, you must
    reference the s3 file and create it via the console.
- CI via travis (on master)

Production

- CI via travis (on tag created)

### Site Content / Data Modeling

###### Pages:

- Homepage (craft cms single with matrix entry)

### Sections / Data Model

- navigation
- landing image
- about me
- testimonials
- projects
- contact
- footer

### Backend

- for development stub the backend via a `json` file.
- continue to work though the list of cloudformation stacks and eventually when you create the craft cms one, create an API to replace the json file.
  - hosted at: api.cuffney.com
