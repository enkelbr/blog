---
title: Smiles - Controlando os deploy em produção com AWS e Slack
date: 2020-07-06 13:58:57
tags:
- Case Study
- Smiles
---
​
A [Smiles](https://www.smiles.com.br) tinha um problema recorrente com deploys em produção feitos indevidamente, para isso desenvolvemos uma solução para controlar as execuções de alterações em produção.

Para isso foi necessário o desenvolvimento de um mecanismo de fácil manutenção e simples de operar, foi aí que desenvolvemos um sistema usando API Gateway, Lambda e com banco em DynamoDB, enviando mensagem no Slack do cliente com opções de aprovação de execuções.
​
### Cliente
​A Smiles é um dos maiores programas de fidelidade do Brasil, com 16 milhões de participantes em março de 2019. Criado há 25 anos como programa de relacionamento da Varig, foi posteriormente adquirido pela GOL e em 2013 se tornou uma empresa independente, com a captação de R$ 1,1 bilhão com oferta pública inicial (IPO).
​
O programa de fidelidade é conhecido pela inovação e pioneirismo com o lançamento produtos e serviços lançados desde 2013, como Clube Smiles, Viaje Fácil e Conta Família. A companhia também tem a maior validade de milhas do mercado, que vão de 3 a 10 anos, de acordo com a categoria do cliente.
​
### Desafio
O escopo do projeto foi a criação de um sistema de controle de alterações em produção com aprovações simples e rápido, contemplando os requisitos abaixo:
 1. Infra as Code.
 2. Immutable Configuration.
 3. Serverless
 4. Slack como interface.
​
O projeto foi muito interessante por se tratar de integrações com produtos de mensageria e utilização de solução serverless.
​
### Solução
​O provisionamento da infra-estrutura foi desenvolvido com AWS CloudFormation.
O API Gateway foi desenvolvido usando OpenAPI 3.0.
Os Lambdas foram desenvolvidos em Python, o que facilitaria a integração com o Slack.

Todos os scripts de deploy, já desenvolvidos e instalados no [Rundeck](https://www.rundeck.com/open-source), foram alterados para receber o novo step de autorização de execução, que aguarda a confirmação ou negativa da execução feita pelo Slack. Veja abaixo um exemplo de mensagem:

{% asset_img Aprovado.png %}

{% asset_img Deny.png %}

### Resultados

Com a entrega deste projeto, nenhuma execução em produção é feita sem a aprovação de uma das pessoas autorizadas no canal do Slack, trazendo maior controle com custo extremamente baixo.
