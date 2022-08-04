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
Definimos quais são as entidades que o projeto precisa contemplar e implementamos utilizando o **CRUD** e a arquitetura do projeto em **MVC**. <br>
O tema da API escolhido pela squad foi Hotel, utilizando metódologias ágeis para o desenvolvimento de nosso projeto (SCRUM e Kanban).

**Curso:** Web Dev FullStack <br> 
**Instituição:** [Resilia Educação](https://www.resilia.com.br/)  <br>
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
npm populate
```

## Testes

Os testes foram implementados utilizando Jest e Super Test. Para executá-los, rode o comando no terminal:
```
npm test
```

## Rotas Implementadas

### Hóspede
* __GET `/hospede`__ <sup>Pega todos os hóspedes adicionados</sup>
  
   Esquema da resposta
    ```json
  {
    "hospedes": [
      {
        "id_Hospede": 1,
        "nome": "Rachelle Santolin",
        "genero": "F",
        "nasc": "13/12/1992",
        "email": "rach@gmail.com",
        "celular": "(21) 99765-8972",
        "senha": "aB@aQ34526"
      },
      {
        "id_Hospede": 2,
        "nome": "Gloria Santos",
        "genero": "F",
        "nasc": "17/10/1990",
        "email": "gloria@gmail.com",
        "celular": "(21) 99545-8867",
        "senha": "cD@aJ34826"
      },
      {
        "id_Hospede": 3,
        "nome": "Ronald Magalhães",
        "genero": "M",
        "nasc": "24/05/1980",
        "email": "ronald@gmail.com",
        "celular": "(11) 99321-9967",
        "senha": "123@aBcD"
      },
      {
        "id_Hospede": 4,
        "nome": "Kay Torres",
        "genero": "NB",
        "nasc": "09/09/1988",
        "email": "kay@gmail.com",
        "celular": "(31) 98381-9467",
        "senha": "456!aBcD"
      }
    ],
    "erro": false
  }
    ```

* __GET `/hospede/email/:email`__ <sup>Seleciona apenas um hóspede</sup>

  Esquema de resposta

  ```json
    {
        "hospede": {
        "id_Hospede": 4,
        "nome": "Kay Torres",
        "genero": "NB",
        "nasc": "09/09/1988",
        "email": "kay@gmail.com",
        "celular": "(31) 98381-9467",
        "senha": "456!aBcD"
      },
      "erro": false
    }
    ```

* __POST `/hospede`__ <sup>Adiciona um novo hóspede</sup>

  Esquema de resposta

  ```json
    {
        "msg": "Hóspede inserido com sucesso",
        "hospede": {
          "id_Hospede": 5,
          "nome": "Groot",
          "genero": "M",
          "nasc": "10/05/2000",
          "email": "groot@gmail.com",
          "celular": "(21) 99565-5643",
          "senha": "897@aBcD"
      },
      "erro": false
    }
    ```

* __DELETE `/hospede/id/:id`__ <sup>Deleta apenas um hóspede</sup>

  Esquema de resposta

    ```json
      {
          "mensagem": "Hospede com id 5 foi deletado com sucesso",
          "erro": false
      }
    ```


* __PUT `/hospede/id/:id`__ <sup>Atualiza apenas um hóspede</sup>

  Esquema de resposta

    ```json
      {
          "mensagem": "Hospede com id 3 atualizado com sucesso",
          "hospede": {
            "id_Hospede": 3,
            "nome": "Ronald Magalhães",
            "genero": "M",
            "nasc": "24/05/1981",
            "email": "ronald123@gmail.com",
            "celular": "(11) 99321-9967",
            "senha": "123@aBcD"
          },
          "erro": false
      }
    ```

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

    Esquema da resposta
    ```json
    {
	"lazer": [
		{
			"id": 1,
			"nome_Hospede": "Geraldo Nascimento",
			"nome_Atividade": "Trilha",
			"dia_Atividade": "10/07/2022"
		},
		{
			"id": 2,
			"nome_Hospede": "Mariah Assunção",
			"nome_Atividade": "SPA",
			"dia_Atividade": "28/07/2022"
		},
		{
			"id": 3,
			"nome_Hospede": "Hudson de Lima",
			"nome_Atividade": "Jogos Eletronicos (LoL)",
			"dia_Atividade": "10/08/2022"
		},
		{
			"id": 4,
			"nome_Hospede": "Isabela da Cunha",
			"nome_Atividade": "Yoga",
			"dia_Atividade": "12/08/2022"
		},
		{
			"id": 5,
			"nome_Hospede": "Heloise Marlene",
			"nome_Atividade": "Visita Museus",
			"dia_Atividade": "25/08/2022"
		},
		{
			"id": 6,
			"nome_Hospede": "Vicente Cardoso",
			"nome_Atividade": "Bingo",
			"dia_Atividade": "26/08/2022"
		},
		{
			"id": 13,
			"nome_Hospede": "Vanessa de Paula",
			"nome_Atividade": "Degustação Queijos e Vinhos",
			"dia_Atividade": "27/08/2022"
		},
		{
			"id": 14,
			"nome_Hospede": "Davi Aparício",
			"nome_Atividade": "Sauna",
			"dia_Atividade": "25/08/2022"
		},
		{
			"id": 16,
			"nome_Hospede": "Joaquim Moura",
			"nome_Atividade": "Bingo",
			"dia_Atividade": "18/08/2022"
		}
	],
	"error": false
    }
    ```

* __GET `/lazer/atividades/:nome_Hospede`__ <sup>Seleciona uma atividade pelo nome do hospede</sup>

  Esquema da resposta
    ```json
  {
    "Hospede": {
		"id": 3,
		"nome_Hospede": "Hudson de Lima",
		"nome_Atividade": "Jogos Eletronicos (LoL)",
		"dia_Atividade": "10/08/2022"
	},
	"erro": false
  } 
    ```
* __POST `/lazer`__ <sup>Adiciona uma nova atividade</sup>

    Esquema da requisição
    ```json
    {
	"nome_Hospede": "Hudson de Lima",
	"nome_Atividade": "Jogos Eletronicos (LoL)",
	"dia_Atividade": "10/08/2022"
	}
    ```
      Esquema da resposta
    ```json
    {
		"mensagem": "Atividade Jogos Eletronicos (LoL) para hospede Hudson de Lima inserida com sucesso",
		"erro": false
    }
    ```

* __DELETE `/lazer/atividades/:id`__ <sup>Deleta atividade do hospede pelo id</sup>

    Esquema da resposta
    ```json
    {
		"msg": "Atividade de hospede no Id 17 foi deletada com sucesso",
		"error": false
    }
    ```

* __PUT `/lazer/atividades/:id`__ <sup>Atualiza atividade do hospede pelo id</sup>

    Esquema da requisição
    ```json
    {
	"nome_Hospede": "Joaquim Moura",
	"nome_Atividade": "Aula de Surf",
	"dia_Atividade": "26/08/2022"
    }
    ```
    
    Esquema da resposta
    ```json
    {
	"msg": "Atividade para hospede no Id 17 foi atualizada com sucesso",
	"erro": false
    }
    ```

### Servicos
* __GET `/servicos`__ <sup>Pega todos os servicos realizados</sup>
  
  Esquema de resposta                             

  ```json
  {
    "servicos": [
      {
        "id": 1,
        "room_service": "café da manhã",
        "early_checkin": null,
        "late_checkout": "2021-01-13 16:30:00",
        "governanca": "toalha",
        "concierge": "teatro"
      },
      {
        "id": 2,
        "room_service": "almoço",
        "early_checkin": "null",
        "late_checkout": "null",
        "governanca": "mull",
        "concierge": "cinema"
      },
      {
        "id": 3,
        "room_service": "café da manhã",
        "early_checkin": "null",
        "late_checkout": "null",
        "governanca": "travesseiro",
        "concierge": "null"
      },
      {
        "id": 4,
        "room_service": "lanche",
        "early_checkin": "null",
        "late_checkout": "null",
        "governanca": "null",
        "concierge": "show"
      },
      {
        "id": 5,
        "room_service": "jantar",
        "early_checkin": 0,
        "late_checkout": "0",
        "governanca": "coberta",
        "concierge": "restaurante"
      },
      {
        "id": 6,
        "room_service": "jantar",
        "early_checkin": 0,
        "late_checkout": "0",
        "governanca": "coberta",
        "concierge": "restaurante"
      },
      {
        "id": 7,
        "room_service": "jantar",
        "early_checkin": 0,
        "late_checkout": "0",
        "governanca": "coberta",
        "concierge": "restaurante"
      },
      {
        "id": 8,
        "room_service": "jantar",
        "early_checkin": 0,
        "late_checkout": "0",
        "governanca": "coberta",
        "concierge": "restaurante"
      },
      {
        "id": 9,
        "room_service": "jantar",
        "early_checkin": 0,
        "late_checkout": "0",
        "governanca": "coberta",
        "concierge": "restaurante"
      },
      {
        "id": 10,
        "room_service": "jantar",
        "early_checkin": 0,
        "late_checkout": "0",
        "governanca": "coberta",
        "concierge": "restaurante"
      }
    ],
    "total": 10,
    "erro": false
  }
``

* __GET `/servico/id/:id`__ <sup>Seleciona apenas um servico pelo id na URL</sup>

Esquema de resposta
```json
{
	"dados": [
		{
			"id": 3,
			"room_service": "café da manhã",
			"early_checkin": "null",
			"late_checkout": "null",
			"governanca": "travesseiro",
			"concierge": "null"
		}
		],
	"status": 200
}
```
* __GET `/servico/id/:id`__ <sup>Seleciona apenas um servico pelo id na URL</sup>

Esquema de resposta para id não encontrado

```json
{
	"mensagem": "Servico com id 27 não encontrado",
	"status": 400
}

```

* __POST `/servicos`__ <sup>Adiciona um novo servico</sup>

Adicionando json: <br>
{<br>

	"room_service": "jantar",
	"early_checkin": "23/03/2022 09:09",
	"late_checkout": "24/03/2022 10:09",
	"governanca": "coberta",
	"concierge": "restaurante"

}<br>

Esquema de resposta

```json
{
	"msg": "Serviço inserido com sucesso"
}
```

* __DELETE `/servicos/id/:id`__ <sup>Deleta apenas um servico pelo id na URL</sup>

Esquema de resposta

```json
{
	"mensagem": "Servico com id 11 deletado",
	"status": 200
}
```
* __DELETE `/servicos/id/:id`__ <sup>Tentativa de deletar um servico pelo id na URL que não existe</sup>

```json
{
	"mensagem": "Servico com id 11 não encontrado",
	"status": 400
}

```

* __PUT `/servicos/id/:id`__ <sup>Atualiza apenas um servico pelo id na URL</sup>

Esquema de resposta

```json
{
	"room_service": "almoço",
	"early_checkin": "21/05/2022 10:30",
	"late_checkout": "21/05/2022 10:30",
	"governanca": "coberta",
	"concierge": "restaurante"
}

{
	"msg": "Serviço atualizado com sucesso"
}

```
* __PUT `/servicos/id/:id`__ <sup>Tentativa de atualizar um servico pelo id na URL que não existe</sup>

```json
{"Serviço não encontrado"}

```

### Restaurante

* __GET `/restaurante`__ <sup>Pega todos os pedidos realizados</sup>

Esquema da resposta
```json
  {
	
	[
	"restaurante":"id": 26,
	"cardapio": "feijoada",
	"bebida": "coca-cola",
	"cliente": "Julia"
	],
	"erro": false
	    }
  ```
  
* __GET `/restaurante/cliente/:cliente`__ <sup>Pega um pedido pelo cliente na URL</sup>

Esquema da resposta
```json
  {
   "restaurante": {
		"id": 25,
		"cardapio": "strogonoff",
		"bebida": "água",
		"cliente": "Julia"
	},
	"erro": false
	  } 
  ```

* __POST `/restaurante`__ <sup>Adiciona um novo pedido</sup>

Esquema da requisição
```json
  {
	"restaurante": {
		"cardapio": "feijoada",
		"bebida": "coca-cola",
		"cliente": "Julia"
	},
	"erro": false
		}
   ```

* __DELETE `/restaurante/id/:id`__ <sup>Deleta apenas um pedido pelo id na URL</sup>

Esquema da requisição
```json
  {
	"restaurante": {
	"msg": "pedido de id:25 deletado com sucesso"
	   },
	"erro": false
 }
  ```

Esquema da resposta

```json
  {
	"msg": "ID não encontrado",
	"erro": true
  }
  ```

* __PUT `/restaurante/id/:id`__ <sup>Atualiza apenas um pedido pelo id na URL</sup>


Esquema da resposta
```json
  {
	"msg": "Cardapio feijoada atualizado com sucesso",
	"erro": false
	}
  ```
