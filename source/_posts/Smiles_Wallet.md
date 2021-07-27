---
title: Smiles - Infrastructure as Code usando AWS + Oracle Service Bus
date: 2021-07-27 13:58:57
tags:
- Case Study
- Smiles
---
​
A [Smiles](https://www.smiles.com.br) tinha a necessidade de criar um novo produto chamado Wallet. Este produto tem como objetio o pagamento da entrada nas salas VIPs em aeroportos com milhas.
Ajudamos eles no desenho da arquitetura de infraestrutura na AWS, sua automação dentro do processo de DevOps e a sustentação de toda a solução.
​

### Cliente
A Smiles é um dos maiores programas de fidelidade do Brasil, com 16 milhões de participantes em março de 2019. Criado há 25 anos como programa de relacionamento da Varig, foi posteriormente adquirido pela GOL e em 2013 se tornou uma empresa independente, com a captação de R$ 1,1 bilhão com oferta pública inicial (IPO).
​
O programa de fidelidade é conhecido pela inovação e pioneirismo com o lançamento produtos e serviços lançados desde 2013, como Clube Smiles, Viaje Fácil e Conta Família. A companhia também tem a maior validade de milhas do mercado, que vão de 3 a 10 anos, de acordo com a categoria do cliente.
​

### Desafio
A [Smiles](https://www.smiles.com.br) solicitou uma arquitetura extremamente escalável, flexível e de baixo custo, com estas premissas definimos utilizar as seguintes soluções AWS:
 1. AWS CloudFormation;
 2. Amazon API Gateway;
 3. AWS Lambda;
 4. Amazon Elastic Load Balancing (ELB);
 4. Amazon Elastic Container Service (ECS);
 5. Amazon Route 53;
 5. Amazon Certificate Manager;
 5. Amazon CloudFront;
 5. Amazon CloudWatch Logs;
 6. Amazon Simple Storage Service (S3);
 7. Amazon Aurora;
 8. Amazon DynamoDB.
​

### Arquitetura
{% asset_img Arquitetura.png %}
​

### Aplicação
O usuário abre o aplicativo no celular e escaneia o QR code provido pela sala VIP. Neste momento é feito uma consulta na API para verificar o valor a ser pago e se o usuário possui milhas suficiente. Após o pagamento com sucesso é liberado a entrada do cliente.

{% asset_img Tela_Inicial.png %}

{% asset_img QR_Code.png %}

### Automação
O provisionamento da infra-estrutura foi desenvolvido com AWS CloudFormation e empacotado com AWS SAM pelo pipeline DevOps da [Smiles](https://www.smiles.com.br).

{% asset_img Cloudformation.png %}

### Resultados

Com a entrega deste projeto, os clientes da [Smiles](https://www.smiles.com.br) puderam pagar sua entrada nas salas VIPs da GOL.
