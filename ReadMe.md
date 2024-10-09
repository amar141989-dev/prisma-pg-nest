# Project Objective 
create nest js application to 
1. Create users [Public]
2. Login user and get jwt token [Public] 
3. Get users by list [Secured]
4. Get users by id [Secured]
5. Delete users by id [Secured]
6. Update user by Id [Secured]
Unit test 
Integration test using test containers 
Create docker file 
Create github ci file 
add helm for deployment 
add github actions 
Openshift: add argocd
Openshift: add deployment project 
Openshift: define argocd application  
Openshift: run deployment 
Openshift: Verify the observability 

# Project commands 

## Install nestjs
    npm i -g @nestjs/cli
    nest new prisma-pg-nest --strict
    npm i --save @nestjs/platform-fastify
    npm i --save @nestjs/config
## Develop basic project structure
## Do configuration for container and deployment
    Containerization: Done
    Push to DockerHub public repo: Done
    Helm templates
    CI using github actions:Pending 
    Deployment in local kubernetes using ArgoCD: Done.

kubectl port-forward --address 0.0.0.0 pod/nestjs-deployment-565799fd8d-hh6ft 8000:3000
helm lint nestjs-release ./nestjs-chart --values ./nestjs-chart/values.yaml
helm upgrade nestjs-release ./nestjs-chart --values ./nestjs-chart/values.yaml