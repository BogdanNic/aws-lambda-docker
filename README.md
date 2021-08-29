# AWS Lambda Docker samples
- [AWS Lambda Docker samples](#aws-lambda-docker-samples)
    - [I created this example for everyone that needs learn how to use AWS Lambda with Docker.](#i-created-this-example-for-everyone-that-needs-learn-how-to-use-aws-lambda-with-docker)
    - [Prerequisite](#prerequisite)
    - [First steps](#first-steps)
    - [Basic workflow](#basic-workflow)
    - [The actual commands for basic workflow](#the-actual-commands-for-basic-workflow)
    - [Helper links:](#helper-links)



### I created this example for everyone that needs learn how to use AWS Lambda with Docker.
The code for the function is shown in app.js. It main pursue is to show that function works when invoked and displays the values send to it.
In images are a couple of examples Docker files to learn from or build from. They are all working all you have to do is copy the Dockerfile from images/ and replace the existing Dockerfile file in the root of the project.

**Official Image** are provided by AWS. There a bit big but they have all that you need to start working, also they are secured and don't require any changes. Just add our function in there and `npm install` and we are done.
**Alpine** are exact the opposite, they are quite small, but you have to add a couple of dependencies to work with Lambda runtime.Also they have some security vulnerabilities so you will that to fix. Plus you need to add the **aws-lambda-ric** and your function code.

### Prerequisite
To follow along you must have configure three things:  
1. AWS CLI configured
2. Docker installed
3. An active AWS account

### First steps
1. If we don't have an ecr repository please create on let's name it hello-world to keep the naming consisted: 
2. `aws ecr create-repository --repository-name hello-world --image-scanning-configuration scanOnPush=true --image-tag-mutability MUTABLE`
3. Now we need to authenticate with Docker 
4. `aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <account>.dkr.ecr.<region>.amazonaws.com`
5. Done!

### Basic workflow
Just like any Docker workflow there are 3 steps:

1. build the image
2. tag the container
3. push to container registry in our case AWS ECR

### The actual commands for basic workflow
1. `docker build -t hello-world .`
2. `docker tag hello-world:latest <account>.dkr.ecr.<region>.amazonaws.com/hello-world:latest`
3. `docker push <account>.dkr.ecr.<region>.amazonaws.com/hello-world:latest`

### Helper links:
1. Guide to configure aws CLI: [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-creds)
2. Guide to lambda documentation for creating images:[here](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html)
3. Guide to create images from alternative image: [here](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-create-from-alt)
