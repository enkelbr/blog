---
title: Smiles - Infrastructure as Code usando AWS + Oracle Service Bus
date: 2019-08-28 13:58:57
tags:
- Case Study
- Smiles
---
​
Nós ajudamos a [Smiles](https://www.smiles.com.br) a automatizar todo o processo de gerenciamento da infraestrutura dos seus [OSB](https://www.oracle.com/middleware/technologies/service-bus.html) usando [Chef](https://www.Chef.io/) com [AWS OpsWorks](https://aws.amazon.com/opsworks/) e [AWS CloudFormation](https://aws.amazon.com/cloudformation/).
​
### Cliente
​A Smiles é um dos maiores programas de fidelidade do Brasil, com 16 milhões de participantes em março de 2019. Criado há 25 anos como programa de relacionamento da Varig, foi posteriormente adquirido pela GOL e em 2013 se tornou uma empresa independente, com a captação de R$ 1,1 bilhão com oferta pública inicial (IPO).
​
O programa de fidelidade é conhecido pela inovação e pioneirismo com o lançamento produtos e serviços lançados desde 2013, como Clube Smiles, Viaje Fácil e Conta Família. A companhia também tem a maior validade de milhas do mercado, que vão de 3 a 10 anos, de acordo com a categoria do cliente.
​
### Desafio
O escopo do projeto foi a migração de versão do produto Oracle Service Bus(OSB) para a versão 12.2.1.3, contemplando os requisitos abaixo:
 1. Infra as Code.
 2. Immutable Configuration.
 3. Auto Scaling em momento de maior troughput.
 4. Job no Rundeck para a criação do ambiente, onde qualquer analista de infra poderia lançar um ambiente.
​

O projeto foi desafiador devido à complexidade do produto e de precisarmos de um processo 100% automático, onde não poderiam ter intervenções humanas uma vez que o job no Rundeck fosse executado.
​
### Solução
​O provisionamento da infra-estrutura foi desenvolvido com AWS CloudFormation.
A instalação e configuração do dominio OSB, foi efetuado via Chef, utilizando scripts WSLT como apoio.
O domínio OSB foi configurado utilizando Dynamic Cluster, para que fosse possivel fazer o auto scaling de forma dinamica e sem intervenção humana.
​
Utilizamos as seguintes ferramentas para atender os requisitos:
 1. Chef:
    - Recipes
    - Roles
    - Data bag
    - Environment
​
 2. WLST:
    - Dominio
    - Data Sources
    - JMS
    - Adapters
    - Realm
    - Coherence
​
3. Rundeck
    - Jobs em Bash (automação da execução de CloudFormation)
 
4. AWS:
    - OpsWorks
    - CloudFormation
    - EC2
    - Auto Scaling Group
    - Application Load Balancer
    - Route53
    - IAM


{% asset_img osb.svg %}

### Resultados

Com a entrega deste projeto, toda a infra-estrutura de OSB agora é gerenciada via código, tendo benefícios como:
- Redução no tempo de provisionamento de ambientes
- Garantia de equalidade na configuração entre os ambientes
- Auto-scaling para garantir resiliência em produção
- Eliminação de falhas humanas no processo de provisionamento de ambientes
- Redução de gastos com recursos humanos no provisionamento de ambientes