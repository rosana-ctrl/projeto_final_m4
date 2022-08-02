# API HOTEL <img src="./src/assets/img/local_hotel-removebg-preview.png"  width="40px;">

<div id="inicio" align="center">
  <a href="#Projeto">Projeto  |</a>&nbsp;&nbsp;
  <a href="#Squad"> Squad  |</a>&nbsp;&nbsp;
  <a href="#modelagem-e-entidades"> Modelagem e Entidades |</a>&nbsp;&nbsp;
  <a href="#pré-requisitos"> Pré-requisitos  |</a>&nbsp;&nbsp;
  <a href="##packages"> Packages  |</a>&nbsp;&nbsp;
  <a href="#como-utilizar-a-api">Como usar a API</a>&nbsp;&nbsp;
</div>

<div align="center">
  <a href="#rotas-implementadas"> Rotas Implementadas  |</a>&nbsp;&nbsp;
   <a href="#hóspedes">Hóspedes    |</a>&nbsp;&nbsp;
    <a href="##reservas-1">Reservas  |</a>&nbsp;&nbsp;
     <a href="#lazer">Lazer  |</a>&nbsp;&nbsp;
      <a href="#servicos">Serviços  |</a>&nbsp;&nbsp;
       <a href="#restaurante">Restaurante  </a>&nbsp;&nbsp;
</div>





# Projeto


Como proposta de Projeto de final de módulo fomos escalados para desenvolver uma API que será o produto viável de um aplicativo.<br>
Definimos quais são as entidades que o projeto precisa contemplar e implementamos utilizando o **CRUD** e a arquitetura do projeto em **MVC**. 

**Curso:** Web Dev FullStack <br> 
**Instituição:** Resilia Educação <br>
**Projeto:** Final - Módulo 4 <br>



### Squad 

<table>
  <tr>
    <td align="center"  width="180px;"> <br>
      <img src="https://avatars.githubusercontent.com/u/93957967?v=4" width="80px;">
       <h4>Edson Vieira</h4> 
       <a href="https://github.com/Edson-7728">
          <img src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png" width="30px;">
       </a>
       <a href="https://www.linkedin.com/in/edson-vieira7728/">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="28px;">
       </a>
    </td>   
    <td align="center" width="180px;"> <br>
    <img src="https://avatars.githubusercontent.com/u/102865744?v=4" width="80px;">
      <h4>Élica Dias</h4>
       <a href="https://github.com/elicadv">
          <img src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png" width="30px;">
       </a>
       <a href="https://www.linkedin.com/in/%C3%A9lica-dias-a4989116b/">
               <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="28px;">
       </a>
    </td>   
    <td align="center" width="180px;">  <br>
      <img src="https://avatars.githubusercontent.com/u/102765815?v=4" width="80px;">
      <h4>Rachelle Santolin</h4>
      <a href="https://github.com/rachellesdev">
         <img src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png" width="30px;">
      </a>
      <a href="https://www.linkedin.com/in/rachelle-santolin/">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="28px;">
      </a>
    </td>   
    <td align="center" width="180px;"> <br>
    <img src="https://avatars.githubusercontent.com/u/83434769?v=4" width="80px;">
        <h4>Rosana Ribeiro</h4>
          <a href="https://github.com/rosana-ctrl">
      <img src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png" width="30px;">
      </a>
      <a href="https://www.linkedin.com/in/rosana-ribeiro-39364a35/">
               <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="28px;">
      </a>
    </td>
    <td align="center" width="180px;"> <br>
    <img src="https://avatars.githubusercontent.com/u/98292860?v=4" width="80px;">
    <h4>Sara Lirio</h4>
      <a href="https://github.com/Sara-Lirio">
   <img src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png" width="30px;">
      </a>
      <a href="https://www.linkedin.com/in/saralirio/">
               <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="28px;">
      </a>
    </td>
    </tr>
    </table>

## Modelagem e Entidades


Modelagem para visualização das relações das entidades para construção da API referente ao Hotel

 <img src="./src/assets/img/modelagem.png" align="center">
<table>
  <tr>
    <td align="center"  width="180px;"> 
    <img src="./src/assets/img/1.png">
       <h4>Atividades de Lazer</h4> 
    </td>   
    <td align="center" width="180px;"> 
       <img src="./src/assets/img/5.png" width="82px;">
      <h4>Restaurante</h4>
    </td>   
    <td align="center" width="180px;">  
      <img src="./src/assets/img/3.png"  width="100px;">
      <h4>Hóspedes</h4>
    </td>   
    <td align="center" width="180px;"> 
    <img src="./src/assets/img/4.png"  width="122px;">
        <h4>Serviços</h4>
    </td>
    <td align="center" width="180px;"> 
    <img src="./src/assets/img/2.png"  width="90px;">
    <h4>Reservas</h4>
    </td>
    </tr>
    </table>

## Pré-requisitos
`Node.js` <sup> v.16.15.1 </sup><br>
`NPM` <sup>v.8.11.0 </sup><br>

## Packages
`Express`<br>
`Nodemon`<br>
`SQLite`<br>
`Jest`<br>
`Super Test`

# Como utilizar a API
## Instalação da Aplicação

Abra o terminal/Powershell e rode os comandos abaixo:

Clonando o repositório:
```
git clone https://github.com/rosana-ctrl/projeto_final_m4.git
```

Entrando na pasta:
```
cd projeto_final_m4
```

Instalando os pacotes:
```
npm install
```

Rodando o projeto:
```
npm start ou npm run dev 
```

## Reinicializando Banco de Dados

Para iniciar um banco de dados novo com os dados padrão, delete o arquivo `database.db` e rode o comando abaixo:
```
node ./src/database/create-and-populate
```

## Testes

Os testes foram implementados utilizando Jest e Super Test. Para executá-los, rode o comando no terminal:
```
npm test
```

## Rotas Implementadas

### Hóspede
* __GET `/hospede`__ <sup>Pega todos os hóspedes adicionado</sup>

* __GET `/hospede/email/:email`__ <sup>Seleciona apenas um hóspede</sup>

* __POST `/hospede`__ <sup>Adiciona um novo hóspede</sup>

* __DELETE `/hospede/email/:email`__ <sup>Deleta apenas um hóspede</sup>

* __PUT `/hospede/email/:email`__ <sup>Atualiza apenas um hóspede</sup>

### Reservas
* __GET `/reservas`__ <sup>Pega todas as reservas realizadas</sup>
  
  Esquema de resposta
  
    ```json
  {
	"Reservas": [
		{
			"id": 1,
			"quarto": "10",
			"quantLeitos": "3",
			"frigobar": "Sim",
			"dataEntrada": "01/07/2022",
			"dataSaida": "03/07/2022"
		},
		{
			"id": 2,
			"quarto": "11",
			"quantLeitos": "3",
			"frigobar": "Sim",
			"dataEntrada": "01/07/2022",
			"dataSaida": "05/07/2022"
		},
		{
			"id": 3,
			"quarto": "12",
			"quantLeitos": "3",
			"frigobar": "Não",
			"dataEntrada": "02/07/2022",
			"dataSaida": "03/07/2022"
		},
		{
			"id": 4,
			"quarto": "14",
			"quantLeitos": "2",
			"frigobar": "Sim",
			"dataEntrada": "02/07/2022",
			"dataSaida": "05/07/2022"
		},
		{
			"id": 5,
			"quarto": "15",
			"quantLeitos": "2",
			"frigobar": "Não",
			"dataEntrada": "03/07/2022",
			"dataSaida": "05/07/2022"
		},
		{
			"id": 6,
			"quarto": "18",
			"quantLeitos": "2",
			"frigobar": "Sim",
			"dataEntrada": "04/07/2022",
			"dataSaida": "08/07/2022"
		},
		{
			"id": 7,
			"quarto": "20",
			"quantLeitos": "1",
			"frigobar": "Sim",
			"dataEntrada": "05/07/2022",
			"dataSaida": "06/07/2022"
		},
		{
			"id": 8,
			"quarto": "22",
			"quantLeitos": "1",
			"frigobar": "Sim",
			"dataEntrada": "05/07/2022",
			"dataSaida": "07/07/2022"
		},
		{
			"id": 9,
			"quarto": "23",
			"quantLeitos": "1",
			"frigobar": "Não",
			"dataEntrada": "07/07/2022",
			"dataSaida": "08/07/2022"
		},
		{
			"id": 10,
			"quarto": "25",
			"quantLeitos": "2",
			"frigobar": "Sim",
			"dataEntrada": "07/07/2022",
			"dataSaida": "11/07/2022"
		},
		{
			"id": 11,
			"quarto": "27",
			"quantLeitos": "4",
			"frigobar": "Sim",
			"dataEntrada": "07/07/2022",
			"dataSaida": "10/07/2022"
		},
		{
			"id": 12,
			"quarto": "28",
			"quantLeitos": "3",
			"frigobar": "Sim",
			"dataEntrada": "07/07/2022",
			"dataSaida": "09/07/2022"
		},
		{
			"id": 13,
			"quarto": "29",
			"quantLeitos": "3",
			"frigobar": "Não",
			"dataEntrada": "08/07/2022",
			"dataSaida": "09/07/2022"
		},
		{
			"id": 14,
			"quarto": "30",
			"quantLeitos": "2",
			"frigobar": "Não",
			"dataEntrada": "10/07/2022",
			"dataSaida": "12/07/2022"
		},
		{
			"id": 15,
			"quarto": "32",
			"quantLeitos": "2",
			"frigobar": "Sim",
			"dataEntrada": "10/07/2022",
			"dataSaida": "13/07/2022"
		},
		{
			"id": 16,
			"quarto": "34",
			"quantLeitos": "1",
			"frigobar": "Sim",
			"dataEntrada": "10/07/2022",
			"dataSaida": "14/07/2022"
		},
		{
			"id": 17,
			"quarto": "35",
			"quantLeitos": "1",
			"frigobar": "Sim",
			"dataEntrada": "11/07/2022",
			"dataSaida": "17/07/2022"
		},
		{
			"id": 18,
			"quarto": "36",
			"quantLeitos": "2",
			"frigobar": "Sim",
			"dataEntrada": "11/07/2022",
			"dataSaida": "14/07/2022"
		},
		{
			"id": 19,
			"quarto": "37",
			"quantLeitos": "3",
			"frigobar": "Sim",
			"dataEntrada": "12/07/2022",
			"dataSaida": "17/07/2022"
		},
		{
			"id": 20,
			"quarto": "39",
			"quantLeitos": "2",
			"frigobar": "Não",
			"dataEntrada": "13/07/2022",
			"dataSaida": "14/07/2022"
		}
	],
	"erro": false
  }

   ```


* __GET `/reservas/quarto/:quarto`__ <sup>Seleciona apenas uma reserva</sup>


    ```json
  {
	"mensage": [
		{
			"id": 1,
			"quarto": "10",
			"quantLeitos": "3",
			"frigobar": "Sim",
			"dataEntrada": "01/07/2022",
			"dataSaida": "03/07/2022"
		}
	],
	"erro": true
  }
    ```
    
* __GET `/reservas/quarto/:quarto`__ <sup>Seleciona uma reserva que não existe</sup>

 Esquema de resposta

   ```json
  {
	"mensagem": "Reserva do quarto 13 não encontrada",
	"erro": false
  }
  ```

* __POST `/reservas`__ <sup>Adiciona uma nova reserva</sup>
  
  Adicionando json:<br>
	{<br>
			"quarto": "40",<br>
			"quantLeitos": "2",<br>
			"frigobar": "Sim",<br>
			"dataEntrada": "20/05/2022",<br>
			"dataSaida": "26/05/2022"<br>
		}<br>
    
 Esquema de resposta
 
 ```json
  {
	"mensagem": "Reserva inserida com sucesso",
	"erro": false
  }
```

* __DELETE `/reservas/quarto/:quarto`__ <sup>Deleta apenas uma reserva</sup>

 Esquema de resposta
 
  ```json
  {
	"mensage": "Reserva do quarto 37 deletada com sucesso",
	"erro": true
  }
```

* __DELETE `/reservas/quarto/:quarto`__ <sup>Deleta uma reserva que não existe</sup>

 Esquema de resposta
 
  ```json
  {
	"mensagem": "Reserva do quarto 50 não encontrada",
	"erro": false
  }
```

* __PUT `/reservas/quarto/:quarto`__ <sup>Atualiza apenas uma reserva</sup>

 Esquema de resposta
 
  ```json
  {
	"msg": "Reserva Atualizada com sucesso",
	"reserva": {
		"id_reserva": 22,
		"quarto": "12",
		"quantLeitos": "3",
		"frigobar": "Sim",
		"dataEntrada": "01/07/2022",
		"dataSaida": "3/7/2022"
	},
	"erro": false
  }
```

### Lazer
* __GET `/lazer`__ <sup>Pega todas as atividades agendadas</sup>

* __GET `/lazer/atividades/:atividade`__ <sup>Seleciona uma atividade pelo nome da atividade</sup>

* __GET `/lazer/atividades/:hospede`__ <sup>Seleciona uma atividade pelo nome do hóspede</sup>

* __GET `/lazer/atividades/:data`__ <sup>Seleciona uma atividade pelo dia que está agendada</sup>

* __POST `/lazer`__ <sup>Adiciona uma nova atividade</sup>

* __DELETE `/lazer/atividades/:atividade`__ <sup>Deleta uma atividade</sup>

* __PUT `/lazer/atividades/:atividade`__ <sup>Atualiza uma atividade</sup>


### Servicos
* __GET `/servicos`__ <sup>Pega todos os servicos realizados/sup>

* __GET `/servico/id/:id`__ <sup>Seleciona apenas um servico pelo id na URL</sup>

* __POST `/servicos`__ <sup>Adiciona um novo servico</sup>

* __DELETE `/servicos/id/:id`__ <sup>Deleta apenas um servico pelo id na URL</sup>

* __PUT `/servicos/id/:id`__ <sup>Atualiza apenas um servico pelo id na URL</sup>

