let now = new Date();
let hours = now.getHours();
let year=now.getFullYear();
let minutes=now.getMinutes();
let seconds=now.getSeconds();
let message;
let color=document.body.style


if(hours<12){
 message="Sabahiniz xeyir!";
 color.backgroundColor="red"
}else if(hours>=12 && hours<17){
    message="Gunortaniz xeyir"
     color.backgroundColor="orange"
} else{
    message="Axsaminiz xeyir";
     color.backgroundColor="blue";
  
}

alert("İl: " + year + "/ Saat: " + hours + "/ Dəqiqə: " + minutes + "/ Saniyə: " + seconds);

alert("Message of day"+ " :  "+message);

        
//second

// function number(a){
//   for(let i=0;i<=1000;i++){
//     if(i%a===0){
//         console.log(i);   
//     }
//   }
// }

// number(21);



// thirt

const orders=
[
    {
      "id": 10271,
      "customerId": "SPLIR",
      "employeeId": 6,
      "orderDate": "1996-08-01 00:00:00.000",
      "requiredDate": "1996-08-29 00:00:00.000",
      "shippedDate": "1996-08-30 00:00:00.000",
      "shipVia": 2,
      "freight": 4.54,
      "shipName": "Split Rail Beer & Ale",
      "shipAddress": {
        "street": "P.O. Box 555",
        "city": "Lander",
        "region": "WY",
        "postalCode": 82520,
        "country": "USA"
      },
      "details": [
        {
          "productId": 33,
          "unitPrice": 2,
          "quantity": 24,
          "discount": 0
        }
      ]
    },
    {
      "id": 10266,
      "customerId": "WARTH",
      "employeeId": 3,
      "orderDate": "1996-07-26 00:00:00.000",
      "requiredDate": "1996-09-06 00:00:00.000",
      "shippedDate": "1996-07-31 00:00:00.000",
      "shipVia": 3,
      "freight": 25.73,
      "shipName": "Wartian Herkku",
      "shipAddress": {
        "street": "Torikatu 38",
        "city": "Oulu",
        "region": "NULL",
        "postalCode": 90110,
        "country": "Finland"
      },
      "details": [
        {
          "productId": 12,
          "unitPrice": 30.4,
          "quantity": 12,
          "discount": 0.05
        }
      ]
    },
    {
      "id": 10279,
      "customerId": "LEHMS",
      "employeeId": 8,
      "orderDate": "1996-08-13 00:00:00.000",
      "requiredDate": "1996-09-10 00:00:00.000",
      "shippedDate": "1996-08-16 00:00:00.000",
      "shipVia": 2,
      "freight": 25.83,
      "shipName": "Lehmanns Marktstand",
      "shipAddress": {
        "street": "Magazinweg 7",
        "city": "Frankfurt a.M.",
        "region": "NULL",
        "postalCode": 60528,
        "country": "Germany"
      },
      "details": [
        {
          "productId": 17,
          "unitPrice": 31.2,
          "quantity": 15,
          "discount": 0.25
        }
      ]
    },
    {
      "id": 10292,
      "customerId": "TRADH",
      "employeeId": 1,
      "orderDate": "1996-08-28 00:00:00.000",
      "requiredDate": "1996-09-25 00:00:00.000",
      "shippedDate": "1996-09-02 00:00:00.000",
      "shipVia": 2,
      "freight": 1.35,
      "shipName": "Tradiçao Hipermercados",
      "shipAddress": {
        "street": "Av. Inês de Castro 414",
        "city": "Sao Paulo",
        "region": "SP",
        "postalCode": "05634-030",
        "country": "Brazil"
      },
      "details": [
        {
          "productId": 20,
          "unitPrice": 64.8,
          "quantity": 20,
          "discount": 0
        }
      ]
    },
    {
      "id": 10295,
      "customerId": "VINET",
      "employeeId": 2,
      "orderDate": "1996-09-02 00:00:00.000",
      "requiredDate": "1996-09-30 00:00:00.000",
      "shippedDate": "1996-09-10 00:00:00.000",
      "shipVia": 2,
      "freight": 1.15,
      "shipName": "Vins et alcools Chevalier",
      "shipAddress": {
        "street": "59 rue de l'Abbaye",
        "city": "Reims",
        "region": "NULL",
        "postalCode": 51100,
        "country": "France"
      },
      "details": [
        {
          "productId": 56,
          "unitPrice": 30.4,
          "quantity": 4,
          "discount": 0
        }
      ]
    },
    {
      "id": 10313,
      "customerId": "QUICK",
      "employeeId": 2,
      "orderDate": "1996-09-24 00:00:00.000",
      "requiredDate": "1996-10-22 00:00:00.000",
      "shippedDate": "1996-10-04 00:00:00.000",
      "shipVia": 2,
      "freight": 1.96,
      "shipName": "QUICK-Stop",
      "shipAddress": {
        "street": "Taucherstraße 10",
        "city": "Cunewalde",
        "region": "NULL",
        "postalCode": 1307,
        "country": "Germany"
      },
      "details": [
        {
          "productId": 36,
          "unitPrice": 15.2,
          "quantity": 12,
          "discount": 0
        }
      ]
    },
    {
      "id": 10317,
      "customerId": "LONEP",
      "employeeId": 6,
      "orderDate": "1996-09-30 00:00:00.000",
      "requiredDate": "1996-10-28 00:00:00.000",
      "shippedDate": "1996-10-10 00:00:00.000",
      "shipVia": 1,
      "freight": 12.69,
      "shipName": "Lonesome Pine Restaurant",
      "shipAddress": {
        "street": "89 Chiaroscuro Rd.",
        "city": "Portland",
        "region": "OR",
        "postalCode": 97219,
        "country": "USA"
      },
      "details": [
        {
          "productId": 1,
          "unitPrice": 14.4,
          "quantity": 20,
          "discount": 0
        }
      ]
    },
    {
      "id": 10322,
      "customerId": "PERIC",
      "employeeId": 7,
      "orderDate": "1996-10-04 00:00:00.000",
      "requiredDate": "1996-11-01 00:00:00.000",
      "shippedDate": "1996-10-23 00:00:00.000",
      "shipVia": 3,
      "freight": 0.4,
      "shipName": "Pericles Comidas clásicas",
      "shipAddress": {
        "street": "Calle Dr. Jorge Cash 321",
        "city": "México D.F.",
        "region": "NULL",
        "postalCode": 5033,
        "country": "Mexico"
      },
      "details": [
        {
          "productId": 52,
          "unitPrice": 5.6,
          "quantity": 20,
          "discount": 0
        }
      ]
    },
    {
      "id": 10320,
      "customerId": "WARTH",
      "employeeId": 5,
      "orderDate": "1996-10-03 00:00:00.000",
      "requiredDate": "1996-10-17 00:00:00.000",
      "shippedDate": "1996-10-18 00:00:00.000",
      "shipVia": 3,
      "freight": 34.57,
      "shipName": "Wartian Herkku",
      "shipAddress": {
        "street": "Torikatu 38",
        "city": "Oulu",
        "region": "NULL",
        "postalCode": 90110,
        "country": "Finland"
      },
      "details": [
        {
          "productId": 71,
          "unitPrice": 17.2,
          "quantity": 30,
          "discount": 0
        }
      ]
    },
    {
      "id": 10321,
      "customerId": "ISLAT",
      "employeeId": 3,
      "orderDate": "1996-10-03 00:00:00.000",
      "requiredDate": "1996-10-31 00:00:00.000",
      "shippedDate": "1996-10-11 00:00:00.000",
      "shipVia": 2,
      "freight": 3.43,
      "shipName": "Island Trading",
      "shipAddress": {
        "street": "Garden House Crowther Way",
        "city": "Cowes",
        "region": "Isle of Wight",
        "postalCode": "PO31 7PJ",
        "country": "UK"
      },
      "details": [
        {
          "productId": 35,
          "unitPrice": 14.4,
          "quantity": 10,
          "discount": 0
        }
      ]
    },
    {
      "id": 10336,
      "customerId": "PRINI",
      "employeeId": 7,
      "orderDate": "1996-10-23 00:00:00.000",
      "requiredDate": "1996-11-20 00:00:00.000",
      "shippedDate": "1996-10-25 00:00:00.000",
      "shipVia": 2,
      "freight": 15.51,
      "shipName": "Princesa Isabel Vinhos",
      "shipAddress": {
        "street": "Estrada da saúde n. 58",
        "city": "Lisboa",
        "region": "NULL",
        "postalCode": 1756,
        "country": "Portugal"
      },
      "details": [
        {
          "productId": 4,
          "unitPrice": 17.6,
          "quantity": 18,
          "discount": 0.1
        }
      ]
    },
    {
      "id": 10349,
      "customerId": "SPLIR",
      "employeeId": 7,
      "orderDate": "1996-11-08 00:00:00.000",
      "requiredDate": "1996-12-06 00:00:00.000",
      "shippedDate": "1996-11-15 00:00:00.000",
      "shipVia": 1,
      "freight": 8.63,
      "shipName": "Split Rail Beer & Ale",
      "shipAddress": {
        "street": "P.O. Box 555",
        "city": "Lander",
        "region": "WY",
        "postalCode": 82520,
        "country": "USA"
      },
      "details": [
        {
          "productId": 54,
          "unitPrice": 5.9,
          "quantity": 24,
          "discount": 0
        }
      ]
    },
    {
      "id": 10331,
      "customerId": "BONAP",
      "employeeId": 9,
      "orderDate": "1996-10-16 00:00:00.000",
      "requiredDate": "1996-11-27 00:00:00.000",
      "shippedDate": "1996-10-21 00:00:00.000",
      "shipVia": 1,
      "freight": 10.19,
      "shipName": "Bon app'",
      "shipAddress": {
        "street": "12 rue des Bouchers",
        "city": "Marseille",
        "region": "NULL",
        "postalCode": 13008,
        "country": "France"
      },
      "details": [
        {
          "productId": 54,
          "unitPrice": 5.9,
          "quantity": 15,
          "discount": 0
        }
      ]
    },
    {
      "id": 10365,
      "customerId": "ANTON",
      "employeeId": 3,
      "orderDate": "1996-11-27 00:00:00.000",
      "requiredDate": "1996-12-25 00:00:00.000",
      "shippedDate": "1996-12-02 00:00:00.000",
      "shipVia": 2,
      "freight": 22,
      "shipName": "Antonio Moreno Taquería",
      "shipAddress": {
        "street": "Mataderos  2312",
        "city": "México D.F.",
        "region": "NULL",
        "postalCode": 5023,
        "country": "Mexico"
      },
      "details": [
        {
          "productId": 11,
          "unitPrice": 16.8,
          "quantity": 24,
          "discount": 0
        }
      ]
    },
    {
      "id": 10371,
      "customerId": "LAMAI",
      "employeeId": 1,
      "orderDate": "1996-12-03 00:00:00.000",
      "requiredDate": "1996-12-31 00:00:00.000",
      "shippedDate": "1996-12-24 00:00:00.000",
      "shipVia": 1,
      "freight": 0.45,
      "shipName": "La maison d'Asie",
      "shipAddress": {
        "street": "1 rue Alsace-Lorraine",
        "city": "Toulouse",
        "region": "NULL",
        "postalCode": 31000,
        "country": "France"
      },
      "details": [
        {
          "productId": 36,
          "unitPrice": 15.2,
          "quantity": 6,
          "discount": 0.2
        }
      ]
    },
    {
      "id": 10376,
      "customerId": "MEREP",
      "employeeId": 1,
      "orderDate": "1996-12-09 00:00:00.000",
      "requiredDate": "1997-01-06 00:00:00.000",
      "shippedDate": "1996-12-13 00:00:00.000",
      "shipVia": 2,
      "freight": 20.39,
      "shipName": "Mère Paillarde",
      "shipAddress": {
        "street": "43 rue St. Laurent",
        "city": "Montréal",
        "region": "Québec",
        "postalCode": "H1J 1C3",
        "country": "Canada"
      },
      "details": [
        {
          "productId": 31,
          "unitPrice": 10,
          "quantity": 42,
          "discount": 0.05
        }
      ]
    },
    {
      "id": 10378,
      "customerId": "FOLKO",
      "employeeId": 5,
      "orderDate": "1996-12-10 00:00:00.000",
      "requiredDate": "1997-01-07 00:00:00.000",
      "shippedDate": "1996-12-19 00:00:00.000",
      "shipVia": 3,
      "freight": 5.44,
      "shipName": "Folk och fä HB",
      "shipAddress": {
        "street": "Åkergatan 24",
        "city": "Bräcke",
        "region": "NULL",
        "postalCode": "S-844 67",
        "country": "Sweden"
      },
      "details": [
        {
          "productId": 71,
          "unitPrice": 17.2,
          "quantity": 6,
          "discount": 0
        }
      ]
    },
    {
      "id": 10392,
      "customerId": "PICCO",
      "employeeId": 2,
      "orderDate": "1996-12-24 00:00:00.000",
      "requiredDate": "1997-01-21 00:00:00.000",
      "shippedDate": "1997-01-01 00:00:00.000",
      "shipVia": 3,
      "freight": 122.46,
      "shipName": "Piccolo und mehr",
      "shipAddress": {
        "street": "Geislweg 14",
        "city": "Salzburg",
        "region": "NULL",
        "postalCode": 5020,
        "country": "Austria"
      },
      "details": [
        {
          "productId": 69,
          "unitPrice": 28.8,
          "quantity": 50,
          "discount": 0
        }
      ]
    },
    {
      "id": 10391,
      "customerId": "DRACD",
      "employeeId": 3,
      "orderDate": "1996-12-23 00:00:00.000",
      "requiredDate": "1997-01-20 00:00:00.000",
      "shippedDate": "1996-12-31 00:00:00.000",
      "shipVia": 3,
      "freight": 5.45,
      "shipName": "Drachenblut Delikatessen",
      "shipAddress": {
        "street": "Walserweg 21",
        "city": "Aachen",
        "region": "NULL",
        "postalCode": 52066,
        "country": "Germany"
      },
      "details": [
        {
          "productId": 13,
          "unitPrice": 4.8,
          "quantity": 18,
          "discount": 0
        }
      ]
    },
    {
      "id": 10405,
      "customerId": "LINOD",
      "employeeId": 1,
      "orderDate": "1997-01-06 00:00:00.000",
      "requiredDate": "1997-02-03 00:00:00.000",
      "shippedDate": "1997-01-22 00:00:00.000",
      "shipVia": 1,
      "freight": 34.82,
      "shipName": "LINO-Delicateses",
      "shipAddress": {
        "street": "Ave. 5 de Mayo Porlamar",
        "city": "I. de Margarita",
        "region": "Nueva Esparta",
        "postalCode": 4980,
        "country": "Venezuela"
      },
      "details": [
        {
          "productId": 3,
          "unitPrice": 8,
          "quantity": 50,
          "discount": 0
        }
      ]
    },
    {
      "id": 10412,
      "customerId": "WARTH",
      "employeeId": 8,
      "orderDate": "1997-01-13 00:00:00.000",
      "requiredDate": "1997-02-10 00:00:00.000",
      "shippedDate": "1997-01-15 00:00:00.000",
      "shipVia": 2,
      "freight": 3.77,
      "shipName": "Wartian Herkku",
      "shipAddress": {
        "street": "Torikatu 38",
        "city": "Oulu",
        "region": "NULL",
        "postalCode": 90110,
        "country": "Finland"
      },
      "details": [
        {
          "productId": 14,
          "unitPrice": 18.6,
          "quantity": 20,
          "discount": 0.1
        }
      ]
    },
    {
      "id": 10422,
      "customerId": "FRANS",
      "employeeId": 2,
      "orderDate": "1997-01-22 00:00:00.000",
      "requiredDate": "1997-02-19 00:00:00.000",
      "shippedDate": "1997-01-31 00:00:00.000",
      "shipVia": 1,
      "freight": 3.02,
      "shipName": "Franchi S.p.A.",
      "shipAddress": {
        "street": "Via Monte Bianco 34",
        "city": "Torino",
        "region": "NULL",
        "postalCode": 10100,
        "country": "Italy"
      },
      "details": [
        {
          "productId": 26,
          "unitPrice": 24.9,
          "quantity": 2,
          "discount": 0
        }
      ]
    },
    {
      "id": 10433,
      "customerId": "PRINI",
      "employeeId": 3,
      "orderDate": "1997-02-03 00:00:00.000",
      "requiredDate": "1997-03-03 00:00:00.000",
      "shippedDate": "1997-03-04 00:00:00.000",
      "shipVia": 3,
      "freight": 73.83,
      "shipName": "Princesa Isabel Vinhos",
      "shipAddress": {
        "street": "Estrada da saúde n. 58",
        "city": "Lisboa",
        "region": "NULL",
        "postalCode": 1756,
        "country": "Portugal"
      },
      "details": [
        {
          "productId": 56,
          "unitPrice": 30.4,
          "quantity": 28,
          "discount": 0
        }
      ]
    },
    {
      "id": 10427,
      "customerId": "PICCO",
      "employeeId": 4,
      "orderDate": "1997-01-27 00:00:00.000",
      "requiredDate": "1997-02-24 00:00:00.000",
      "shippedDate": "1997-03-03 00:00:00.000",
      "shipVia": 2,
      "freight": 31.29,
      "shipName": "Piccolo und mehr",
      "shipAddress": {
        "street": "Geislweg 14",
        "city": "Salzburg",
        "region": "NULL",
        "postalCode": 5020,
        "country": "Austria"
      },
      "details": [
        {
          "productId": 14,
          "unitPrice": 18.6,
          "quantity": 35,
          "discount": 0
        }
      ]
    },
    {
      "id": 10437,
      "customerId": "WARTH",
      "employeeId": 8,
      "orderDate": "1997-02-05 00:00:00.000",
      "requiredDate": "1997-03-05 00:00:00.000",
      "shippedDate": "1997-02-12 00:00:00.000",
      "shipVia": 1,
      "freight": 19.97,
      "shipName": "Wartian Herkku",
      "shipAddress": {
        "street": "Torikatu 38",
        "city": "Oulu",
        "region": "NULL",
        "postalCode": 90110,
        "country": "Finland"
      },
      "details": [
        {
          "productId": 53,
          "unitPrice": 26.2,
          "quantity": 15,
          "discount": 0
        }
      ]
    },
    {
      "id": 10428,
      "customerId": "REGGC",
      "employeeId": 7,
      "orderDate": "1997-01-28 00:00:00.000",
      "requiredDate": "1997-02-25 00:00:00.000",
      "shippedDate": "1997-02-04 00:00:00.000",
      "shipVia": 1,
      "freight": 11.09,
      "shipName": "Reggiani Caseifici",
      "shipAddress": {
        "street": "Strada Provinciale 124",
        "city": "Reggio Emilia",
        "region": "NULL",
        "postalCode": 42100,
        "country": "Italy"
      },
      "details": [
        {
          "productId": 46,
          "unitPrice": 9.6,
          "quantity": 20,
          "discount": 0
        }
      ]
    },
    {
      "id": 10441,
      "customerId": "OLDWO",
      "employeeId": 3,
      "orderDate": "1997-02-10 00:00:00.000",
      "requiredDate": "1997-03-24 00:00:00.000",
      "shippedDate": "1997-03-14 00:00:00.000",
      "shipVia": 2,
      "freight": 73.02,
      "shipName": "Old World Delicatessen",
      "shipAddress": {
        "street": "2743 Bering St.",
        "city": "Anchorage",
        "region": "AK",
        "postalCode": 99508,
        "country": "USA"
      },
      "details": [
        {
          "productId": 27,
          "unitPrice": 35.1,
          "quantity": 50,
          "discount": 0
        }
      ]
    },
    {
      "id": 10457,
      "customerId": "KOENE",
      "employeeId": 2,
      "orderDate": "1997-02-25 00:00:00.000",
      "requiredDate": "1997-03-25 00:00:00.000",
      "shippedDate": "1997-03-03 00:00:00.000",
      "shipVia": 1,
      "freight": 11.57,
      "shipName": "Königlich Essen",
      "shipAddress": {
        "street": "Maubelstr. 90",
        "city": "Brandenburg",
        "region": "NULL",
        "postalCode": 14776,
        "country": "Germany"
      },
      "details": [
        {
          "productId": 59,
          "unitPrice": 44,
          "quantity": 36,
          "discount": 0
        }
      ]
    },
    {
      "id": 10478,
      "customerId": "VICTE",
      "employeeId": 2,
      "orderDate": "1997-03-18 00:00:00.000",
      "requiredDate": "1997-04-01 00:00:00.000",
      "shippedDate": "1997-03-26 00:00:00.000",
      "shipVia": 3,
      "freight": 4.81,
      "shipName": "Victuailles en stock",
      "shipAddress": {
        "street": "2 rue du Commerce",
        "city": "Lyon",
        "region": "NULL",
        "postalCode": 69004,
        "country": "France"
      },
      "details": [
        {
          "productId": 10,
          "unitPrice": 24.8,
          "quantity": 20,
          "discount": 0.05
        }
      ]
    },
    {
      "id": 10482,
      "customerId": "LAZYK",
      "employeeId": 1,
      "orderDate": "1997-03-21 00:00:00.000",
      "requiredDate": "1997-04-18 00:00:00.000",
      "shippedDate": "1997-04-10 00:00:00.000",
      "shipVia": 3,
      "freight": 7.48,
      "shipName": "Lazy K Kountry Store",
      "shipAddress": {
        "street": "12 Orchestra Terrace",
        "city": "Walla Walla",
        "region": "WA",
        "postalCode": 99362,
        "country": "USA"
      },
      "details": [
        {
          "productId": 40,
          "unitPrice": 14.7,
          "quantity": 10,
          "discount": 0
        }
      ]
    },
    {
      "id": 10494,
      "customerId": "COMMI",
      "employeeId": 4,
      "orderDate": "1997-04-02 00:00:00.000",
      "requiredDate": "1997-04-30 00:00:00.000",
      "shippedDate": "1997-04-09 00:00:00.000",
      "shipVia": 2,
      "freight": 65.99,
      "shipName": "Comércio Mineiro",
      "shipAddress": {
        "street": "Av. dos Lusíadas 23",
        "city": "Sao Paulo",
        "region": "SP",
        "postalCode": "05432-043",
        "country": "Brazil"
      },
      "details": [
        {
          "productId": 56,
          "unitPrice": 30.4,
          "quantity": 30,
          "discount": 0
        }
      ]
    },
    {
      "id": 10501,
      "customerId": "BLAUS",
      "employeeId": 9,
      "orderDate": "1997-04-09 00:00:00.000",
      "requiredDate": "1997-05-07 00:00:00.000",
      "shippedDate": "1997-04-16 00:00:00.000",
      "shipVia": 3,
      "freight": 8.85,
      "shipName": "Blauer See Delikatessen",
      "shipAddress": {
        "street": "Forsterstr. 57",
        "city": "Mannheim",
        "region": "NULL",
        "postalCode": 68306,
        "country": "Germany"
      },
      "details": [
        {
          "productId": 54,
          "unitPrice": 7.45,
          "quantity": 20,
          "discount": 0
        }
      ]
    },
    {
      "id": 10496,
      "customerId": "TRADH",
      "employeeId": 7,
      "orderDate": "1997-04-04 00:00:00.000",
      "requiredDate": "1997-05-02 00:00:00.000",
      "shippedDate": "1997-04-07 00:00:00.000",
      "shipVia": 2,
      "freight": 46.77,
      "shipName": "Tradiçao Hipermercados",
      "shipAddress": {
        "street": "Av. Inês de Castro 414",
        "city": "Sao Paulo",
        "region": "SP",
        "postalCode": "05634-030",
        "country": "Brazil"
      },
      "details": [
        {
          "productId": 31,
          "unitPrice": 10,
          "quantity": 20,
          "discount": 0.05
        }
      ]
    },
    {
      "id": 10509,
      "customerId": "BLAUS",
      "employeeId": 4,
      "orderDate": "1997-04-17 00:00:00.000",
      "requiredDate": "1997-05-15 00:00:00.000",
      "shippedDate": "1997-04-29 00:00:00.000",
      "shipVia": 1,
      "freight": 0.15,
      "shipName": "Blauer See Delikatessen",
      "shipAddress": {
        "street": "Forsterstr. 57",
        "city": "Mannheim",
        "region": "NULL",
        "postalCode": 68306,
        "country": "Germany"
      },
      "details": [
        {
          "productId": 28,
          "unitPrice": 45.6,
          "quantity": 3,
          "discount": 0
        }
      ]
    },
    {
      "id": 10505,
      "customerId": "MEREP",
      "employeeId": 3,
      "orderDate": "1997-04-14 00:00:00.000",
      "requiredDate": "1997-05-12 00:00:00.000",
      "shippedDate": "1997-04-21 00:00:00.000",
      "shipVia": 3,
      "freight": 7.13,
      "shipName": "Mère Paillarde",
      "shipAddress": {
        "street": "43 rue St. Laurent",
        "city": "Montréal",
        "region": "Québec",
        "postalCode": "H1J 1C3",
        "country": "Canada"
      },
      "details": [
        {
          "productId": 62,
          "unitPrice": 49.3,
          "quantity": 3,
          "discount": 0
        }
      ]
    },
    {
      "id": 10545,
      "customerId": "LAZYK",
      "employeeId": 8,
      "orderDate": "1997-05-22 00:00:00.000",
      "requiredDate": "1997-06-19 00:00:00.000",
      "shippedDate": "1997-06-26 00:00:00.000",
      "shipVia": 2,
      "freight": 11.92,
      "shipName": "Lazy K Kountry Store",
      "shipAddress": {
        "street": "12 Orchestra Terrace",
        "city": "Walla Walla",
        "region": "WA",
        "postalCode": 99362,
        "country": "USA"
      },
      "details": [
        {
          "productId": 11,
          "unitPrice": 21,
          "quantity": 10,
          "discount": 0
        }
      ]
    },
    {
      "id": 10556,
      "customerId": "SIMOB",
      "employeeId": 2,
      "orderDate": "1997-06-03 00:00:00.000",
      "requiredDate": "1997-07-15 00:00:00.000",
      "shippedDate": "1997-06-13 00:00:00.000",
      "shipVia": 1,
      "freight": 9.8,
      "shipName": "Simons bistro",
      "shipAddress": {
        "street": "Vinbæltet 34",
        "city": "Kobenhavn",
        "region": "NULL",
        "postalCode": 1734,
        "country": "Denmark"
      },
      "details": [
        {
          "productId": 72,
          "unitPrice": 34.8,
          "quantity": 24,
          "discount": 0
        }
      ]
    },
    {
      "id": 10568,
      "customerId": "GALED",
      "employeeId": 3,
      "orderDate": "1997-06-13 00:00:00.000",
      "requiredDate": "1997-07-11 00:00:00.000",
      "shippedDate": "1997-07-09 00:00:00.000",
      "shipVia": 3,
      "freight": 6.54,
      "shipName": "Galería del gastronómo",
      "shipAddress": {
        "street": "Rambla de Cataluña 23",
        "city": "Barcelona",
        "region": "NULL",
        "postalCode": 8022,
        "country": "Spain"
      },
      "details": [
        {
          "productId": 10,
          "unitPrice": 31,
          "quantity": 5,
          "discount": 0
        }
      ]
    },
    {
      "id": 10581,
      "customerId": "FAMIA",
      "employeeId": 3,
      "orderDate": "1997-06-26 00:00:00.000",
      "requiredDate": "1997-07-24 00:00:00.000",
      "shippedDate": "1997-07-02 00:00:00.000",
      "shipVia": 1,
      "freight": 3.01,
      "shipName": "Familia Arquibaldo",
      "shipAddress": {
        "street": "Rua Orós 92",
        "city": "Sao Paulo",
        "region": "SP",
        "postalCode": "05442-030",
        "country": "Brazil"
      },
      "details": [
        {
          "productId": 75,
          "unitPrice": 7.75,
          "quantity": 50,
          "discount": 0.2
        }
      ]
    },
    {
      "id": 10585,
      "customerId": "WELLI",
      "employeeId": 7,
      "orderDate": "1997-07-01 00:00:00.000",
      "requiredDate": "1997-07-29 00:00:00.000",
      "shippedDate": "1997-07-10 00:00:00.000",
      "shipVia": 1,
      "freight": 13.41,
      "shipName": "Wellington Importadora",
      "shipAddress": {
        "street": "Rua do Mercado 12",
        "city": "Resende",
        "region": "SP",
        "postalCode": "08737-363",
        "country": "Brazil"
      },
      "details": [
        {
          "productId": 47,
          "unitPrice": 9.5,
          "quantity": 15,
          "discount": 0
        }
      ]
    },
    {
      "id": 10586,
      "customerId": "REGGC",
      "employeeId": 9,
      "orderDate": "1997-07-02 00:00:00.000",
      "requiredDate": "1997-07-30 00:00:00.000",
      "shippedDate": "1997-07-09 00:00:00.000",
      "shipVia": 1,
      "freight": 0.48,
      "shipName": "Reggiani Caseifici",
      "shipAddress": {
        "street": "Strada Provinciale 124",
        "city": "Reggio Emilia",
        "region": "NULL",
        "postalCode": 42100,
        "country": "Italy"
      },
      "details": [
        {
          "productId": 52,
          "unitPrice": 7,
          "quantity": 4,
          "discount": 0.15
        }
      ]
    },
    {
      "id": 10589,
      "customerId": "GREAL",
      "employeeId": 8,
      "orderDate": "1997-07-04 00:00:00.000",
      "requiredDate": "1997-08-01 00:00:00.000",
      "shippedDate": "1997-07-14 00:00:00.000",
      "shipVia": 2,
      "freight": 4.42,
      "shipName": "Great Lakes Food Market",
      "shipAddress": {
        "street": "2732 Baker Blvd.",
        "city": "Eugene",
        "region": "OR",
        "postalCode": 97403,
        "country": "USA"
      },
      "details": [
        {
          "productId": 35,
          "unitPrice": 18,
          "quantity": 4,
          "discount": 0
        }
      ]
    },
    {
      "id": 10584,
      "customerId": "BLONP",
      "employeeId": 4,
      "orderDate": "1997-06-30 00:00:00.000",
      "requiredDate": "1997-07-28 00:00:00.000",
      "shippedDate": "1997-07-04 00:00:00.000",
      "shipVia": 1,
      "freight": 59.14,
      "shipName": "Blondel père et fils",
      "shipAddress": {
        "street": "24 place Kléber",
        "city": "Strasbourg",
        "region": "NULL",
        "postalCode": 67000,
        "country": "France"
      },
      "details": [
        {
          "productId": 31,
          "unitPrice": 12.5,
          "quantity": 50,
          "discount": 0.05
        }
      ]
    },
    {
      "id": 10599,
      "customerId": "BSBEV",
      "employeeId": 6,
      "orderDate": "1997-07-15 00:00:00.000",
      "requiredDate": "1997-08-26 00:00:00.000",
      "shippedDate": "1997-07-21 00:00:00.000",
      "shipVia": 3,
      "freight": 29.98,
      "shipName": "B's Beverages",
      "shipAddress": {
        "street": "Fauntleroy Circus",
        "city": "London",
        "region": "NULL",
        "postalCode": "EC2 5NT",
        "country": "UK"
      },
      "details": [
        {
          "productId": 62,
          "unitPrice": 49.3,
          "quantity": 10,
          "discount": 0
        }
      ]
    },
    {
      "id": 10602,
      "customerId": "VAFFE",
      "employeeId": 8,
      "orderDate": "1997-07-17 00:00:00.000",
      "requiredDate": "1997-08-14 00:00:00.000",
      "shippedDate": "1997-07-22 00:00:00.000",
      "shipVia": 2,
      "freight": 2.92,
      "shipName": "Vaffeljernet",
      "shipAddress": {
        "street": "Smagsloget 45",
        "city": "Århus",
        "region": "NULL",
        "postalCode": 8200,
        "country": "Denmark"
      },
      "details": [
        {
          "productId": 77,
          "unitPrice": 13,
          "quantity": 5,
          "discount": 0.25
        }
      ]
    },
    {
      "id": 10608,
      "customerId": "TOMSP",
      "employeeId": 4,
      "orderDate": "1997-07-23 00:00:00.000",
      "requiredDate": "1997-08-20 00:00:00.000",
      "shippedDate": "1997-08-01 00:00:00.000",
      "shipVia": 2,
      "freight": 27.79,
      "shipName": "Toms Spezialitäten",
      "shipAddress": {
        "street": "Luisenstr. 48",
        "city": "Münster",
        "region": "NULL",
        "postalCode": 44087,
        "country": "Germany"
      },
      "details": [
        {
          "productId": 56,
          "unitPrice": 38,
          "quantity": 28,
          "discount": 0
        }
      ]
    },
    {
      "id": 10610,
      "customerId": "LAMAI",
      "employeeId": 8,
      "orderDate": "1997-07-25 00:00:00.000",
      "requiredDate": "1997-08-22 00:00:00.000",
      "shippedDate": "1997-08-06 00:00:00.000",
      "shipVia": 1,
      "freight": 26.78,
      "shipName": "La maison d'Asie",
      "shipAddress": {
        "street": "1 rue Alsace-Lorraine",
        "city": "Toulouse",
        "region": "NULL",
        "postalCode": 31000,
        "country": "France"
      },
      "details": [
        {
          "productId": 36,
          "unitPrice": 19,
          "quantity": 21,
          "discount": 0.25
        }
      ]
    },
    {
      "id": 10615,
      "customerId": "WILMK",
      "employeeId": 2,
      "orderDate": "1997-07-30 00:00:00.000",
      "requiredDate": "1997-08-27 00:00:00.000",
      "shippedDate": "1997-08-06 00:00:00.000",
      "shipVia": 3,
      "freight": 0.75,
      "shipName": "Wilman Kala",
      "shipAddress": {
        "street": "Keskuskatu 45",
        "city": "Helsinki",
        "region": "NULL",
        "postalCode": 21240,
        "country": "Finland"
      },
      "details": [
        {
          "productId": 55,
          "unitPrice": 24,
          "quantity": 5,
          "discount": 0
        }
      ]
    },
    {
      "id": 10617,
      "customerId": "GREAL",
      "employeeId": 4,
      "orderDate": "1997-07-31 00:00:00.000",
      "requiredDate": "1997-08-28 00:00:00.000",
      "shippedDate": "1997-08-04 00:00:00.000",
      "shipVia": 2,
      "freight": 18.53,
      "shipName": "Great Lakes Food Market",
      "shipAddress": {
        "street": "2732 Baker Blvd.",
        "city": "Eugene",
        "region": "OR",
        "postalCode": 97403,
        "country": "USA"
      },
      "details": [
        {
          "productId": 59,
          "unitPrice": 55,
          "quantity": 30,
          "discount": 0.15
        }
      ]
    },
    {
      "id": 10628,
      "customerId": "BLONP",
      "employeeId": 4,
      "orderDate": "1997-08-12 00:00:00.000",
      "requiredDate": "1997-09-09 00:00:00.000",
      "shippedDate": "1997-08-20 00:00:00.000",
      "shipVia": 3,
      "freight": 30.36,
      "shipName": "Blondel père et fils",
      "shipAddress": {
        "street": "24 place Kléber",
        "city": "Strasbourg",
        "region": "NULL",
        "postalCode": 67000,
        "country": "France"
      },
      "details": [
        {
          "productId": 1,
          "unitPrice": 18,
          "quantity": 25,
          "discount": 0
        }
      ]
    },
    {
      "id": 10631,
      "customerId": "LAMAI",
      "employeeId": 8,
      "orderDate": "1997-08-14 00:00:00.000",
      "requiredDate": "1997-09-11 00:00:00.000",
      "shippedDate": "1997-08-15 00:00:00.000",
      "shipVia": 1,
      "freight": 0.87,
      "shipName": "La maison d'Asie",
      "shipAddress": {
        "street": "1 rue Alsace-Lorraine",
        "city": "Toulouse",
        "region": "NULL",
        "postalCode": 31000,
        "country": "France"
      },
      "details": [
        {
          "productId": 75,
          "unitPrice": 7.75,
          "quantity": 8,
          "discount": 0.1
        }
      ]
    },
    {
      "id": 10639,
      "customerId": "SANTG",
      "employeeId": 7,
      "orderDate": "1997-08-20 00:00:00.000",
      "requiredDate": "1997-09-17 00:00:00.000",
      "shippedDate": "1997-08-27 00:00:00.000",
      "shipVia": 3,
      "freight": 38.64,
      "shipName": "Santé Gourmet",
      "shipAddress": {
        "street": "Erling Skakkes gate 78",
        "city": "Stavern",
        "region": "NULL",
        "postalCode": 4110,
        "country": "Norway"
      },
      "details": [
        {
          "productId": 18,
          "unitPrice": 62.5,
          "quantity": 8,
          "discount": 0
        }
      ]
    },
    {
      "id": 10655,
      "customerId": "REGGC",
      "employeeId": 1,
      "orderDate": "1997-09-03 00:00:00.000",
      "requiredDate": "1997-10-01 00:00:00.000",
      "shippedDate": "1997-09-11 00:00:00.000",
      "shipVia": 2,
      "freight": 4.41,
      "shipName": "Reggiani Caseifici",
      "shipAddress": {
        "street": "Strada Provinciale 124",
        "city": "Reggio Emilia",
        "region": "NULL",
        "postalCode": 42100,
        "country": "Italy"
      },
      "details": [
        {
          "productId": 41,
          "unitPrice": 9.65,
          "quantity": 20,
          "discount": 0.2
        }
      ]
    },
    {
      "id": 10660,
      "customerId": "HUNGC",
      "employeeId": 8,
      "orderDate": "1997-09-08 00:00:00.000",
      "requiredDate": "1997-10-06 00:00:00.000",
      "shippedDate": "1997-10-15 00:00:00.000",
      "shipVia": 1,
      "freight": 111.29,
      "shipName": "Hungry Coyote Import Store",
      "shipAddress": {
        "street": "City Center Plaza 516 Main St.",
        "city": "Elgin",
        "region": "OR",
        "postalCode": 97827,
        "country": "USA"
      },
      "details": [
        {
          "productId": 20,
          "unitPrice": 81,
          "quantity": 21,
          "discount": 0
        }
      ]
    },
    {
      "id": 10662,
      "customerId": "LONEP",
      "employeeId": 3,
      "orderDate": "1997-09-09 00:00:00.000",
      "requiredDate": "1997-10-07 00:00:00.000",
      "shippedDate": "1997-09-18 00:00:00.000",
      "shipVia": 2,
      "freight": 1.28,
      "shipName": "Lonesome Pine Restaurant",
      "shipAddress": {
        "street": "89 Chiaroscuro Rd.",
        "city": "Portland",
        "region": "OR",
        "postalCode": 97219,
        "country": "USA"
      },
      "details": [
        {
          "productId": 68,
          "unitPrice": 12.5,
          "quantity": 10,
          "discount": 0
        }
      ]
    },
    {
      "id": 10669,
      "customerId": "SIMOB",
      "employeeId": 2,
      "orderDate": "1997-09-15 00:00:00.000",
      "requiredDate": "1997-10-13 00:00:00.000",
      "shippedDate": "1997-09-22 00:00:00.000",
      "shipVia": 1,
      "freight": 24.39,
      "shipName": "Simons bistro",
      "shipAddress": {
        "street": "Vinbæltet 34",
        "city": "Kobenhavn",
        "region": "NULL",
        "postalCode": 1734,
        "country": "Denmark"
      },
      "details": [
        {
          "productId": 36,
          "unitPrice": 19,
          "quantity": 30,
          "discount": 0
        }
      ]
    },
    {
      "id": 10679,
      "customerId": "BLONP",
      "employeeId": 8,
      "orderDate": "1997-09-23 00:00:00.000",
      "requiredDate": "1997-10-21 00:00:00.000",
      "shippedDate": "1997-09-30 00:00:00.000",
      "shipVia": 3,
      "freight": 27.94,
      "shipName": "Blondel père et fils",
      "shipAddress": {
        "street": "24 place Kléber",
        "city": "Strasbourg",
        "region": "NULL",
        "postalCode": 67000,
        "country": "France"
      },
      "details": [
        {
          "productId": 59,
          "unitPrice": 55,
          "quantity": 12,
          "discount": 0
        }
      ]
    },
    {
      "id": 10683,
      "customerId": "DUMON",
      "employeeId": 2,
      "orderDate": "1997-09-26 00:00:00.000",
      "requiredDate": "1997-10-24 00:00:00.000",
      "shippedDate": "1997-10-01 00:00:00.000",
      "shipVia": 1,
      "freight": 4.4,
      "shipName": "Du monde entier",
      "shipAddress": {
        "street": "67 rue des Cinquante Otages",
        "city": "Nantes",
        "region": "NULL",
        "postalCode": 44000,
        "country": "France"
      },
      "details": [
        {
          "productId": 52,
          "unitPrice": 7,
          "quantity": 9,
          "discount": 0
        }
      ]
    },
    {
      "id": 10674,
      "customerId": "ISLAT",
      "employeeId": 4,
      "orderDate": "1997-09-18 00:00:00.000",
      "requiredDate": "1997-10-16 00:00:00.000",
      "shippedDate": "1997-09-30 00:00:00.000",
      "shipVia": 2,
      "freight": 0.9,
      "shipName": "Island Trading",
      "shipAddress": {
        "street": "Garden House Crowther Way",
        "city": "Cowes",
        "region": "Isle of Wight",
        "postalCode": "PO31 7PJ",
        "country": "UK"
      },
      "details": [
        {
          "productId": 23,
          "unitPrice": 9,
          "quantity": 5,
          "discount": 0
        }
      ]
    },
    {
      "id": 10692,
      "customerId": "ALFKI",
      "employeeId": 4,
      "orderDate": "1997-10-03 00:00:00.000",
      "requiredDate": "1997-10-31 00:00:00.000",
      "shippedDate": "1997-10-13 00:00:00.000",
      "shipVia": 2,
      "freight": 61.02,
      "shipName": "Alfred's Futterkiste",
      "shipAddress": {
        "street": "Obere Str. 57",
        "city": "Berlin",
        "region": "NULL",
        "postalCode": 12209,
        "country": "Germany"
      },
      "details": [
        {
          "productId": 63,
          "unitPrice": 43.9,
          "quantity": 20,
          "discount": 0
        }
      ]
    },
    {
      "id": 10689,
      "customerId": "BERGS",
      "employeeId": 1,
      "orderDate": "1997-10-01 00:00:00.000",
      "requiredDate": "1997-10-29 00:00:00.000",
      "shippedDate": "1997-10-07 00:00:00.000",
      "shipVia": 2,
      "freight": 13.42,
      "shipName": "Berglunds snabbköp",
      "shipAddress": {
        "street": "Berguvsvägen  8",
        "city": "Luleå",
        "region": "NULL",
        "postalCode": "S-958 22",
        "country": "Sweden"
      },
      "details": [
        {
          "productId": 1,
          "unitPrice": 18,
          "quantity": 35,
          "discount": 0.25
        }
      ]
    },
    {
      "id": 10699,
      "customerId": "MORGK",
      "employeeId": 3,
      "orderDate": "1997-10-09 00:00:00.000",
      "requiredDate": "1997-11-06 00:00:00.000",
      "shippedDate": "1997-10-13 00:00:00.000",
      "shipVia": 3,
      "freight": 0.58,
      "shipName": "Morgenstern Gesundkost",
      "shipAddress": {
        "street": "Heerstr. 22",
        "city": "Leipzig",
        "region": "NULL",
        "postalCode": 4179,
        "country": "Germany"
      },
      "details": [
        {
          "productId": 47,
          "unitPrice": 9.5,
          "quantity": 12,
          "discount": 0
        }
      ]
    },
    {
      "id": 10721,
      "customerId": "QUICK",
      "employeeId": 5,
      "orderDate": "1997-10-29 00:00:00.000",
      "requiredDate": "1997-11-26 00:00:00.000",
      "shippedDate": "1997-10-31 00:00:00.000",
      "shipVia": 3,
      "freight": 48.92,
      "shipName": "QUICK-Stop",
      "shipAddress": {
        "street": "Taucherstraße 10",
        "city": "Cunewalde",
        "region": "NULL",
        "postalCode": 1307,
        "country": "Germany"
      },
      "details": [
        {
          "productId": 44,
          "unitPrice": 19.45,
          "quantity": 50,
          "discount": 0.05
        }
      ]
    },
    {
      "id": 10723,
      "customerId": "WHITC",
      "employeeId": 3,
      "orderDate": "1997-10-30 00:00:00.000",
      "requiredDate": "1997-11-27 00:00:00.000",
      "shippedDate": "1997-11-25 00:00:00.000",
      "shipVia": 1,
      "freight": 21.72,
      "shipName": "White Clover Markets",
      "shipAddress": {
        "street": "1029 - 12th Ave. S.",
        "city": "Seattle",
        "region": "WA",
        "postalCode": 98124,
        "country": "USA"
      },
      "details": [
        {
          "productId": 26,
          "unitPrice": 31.23,
          "quantity": 15,
          "discount": 0
        }
      ]
    },
    {
      "id": 10738,
      "customerId": "SPECD",
      "employeeId": 2,
      "orderDate": "1997-11-12 00:00:00.000",
      "requiredDate": "1997-12-10 00:00:00.000",
      "shippedDate": "1997-11-18 00:00:00.000",
      "shipVia": 1,
      "freight": 2.91,
      "shipName": "Spécialités du monde",
      "shipAddress": {
        "street": "25 rue Lauriston",
        "city": "Paris",
        "region": "NULL",
        "postalCode": 75016,
        "country": "France"
      },
      "details": [
        {
          "productId": 16,
          "unitPrice": 17.45,
          "quantity": 3,
          "discount": 0
        }
      ]
    },
    {
      "id": 10741,
      "customerId": "AROUT",
      "employeeId": 4,
      "orderDate": "1997-11-14 00:00:00.000",
      "requiredDate": "1997-11-28 00:00:00.000",
      "shippedDate": "1997-11-18 00:00:00.000",
      "shipVia": 3,
      "freight": 10.96,
      "shipName": "Around the Horn",
      "shipAddress": {
        "street": "Brook Farm Stratford St. Mary",
        "city": "Colchester",
        "region": "Essex",
        "postalCode": "CO7 6JX",
        "country": "UK"
      },
      "details": [
        {
          "productId": 2,
          "unitPrice": 19,
          "quantity": 15,
          "discount": 0.2
        }
      ]
    },
    {
      "id": 10732,
      "customerId": "BONAP",
      "employeeId": 3,
      "orderDate": "1997-11-06 00:00:00.000",
      "requiredDate": "1997-12-04 00:00:00.000",
      "shippedDate": "1997-11-07 00:00:00.000",
      "shipVia": 1,
      "freight": 16.97,
      "shipName": "Bon app'",
      "shipAddress": {
        "street": "12 rue des Bouchers",
        "city": "Marseille",
        "region": "NULL",
        "postalCode": 13008,
        "country": "France"
      },
      "details": [
        {
          "productId": 76,
          "unitPrice": 18,
          "quantity": 20,
          "discount": 0
        }
      ]
    },
    {
      "id": 10743,
      "customerId": "AROUT",
      "employeeId": 1,
      "orderDate": "1997-11-17 00:00:00.000",
      "requiredDate": "1997-12-15 00:00:00.000",
      "shippedDate": "1997-11-21 00:00:00.000",
      "shipVia": 2,
      "freight": 23.72,
      "shipName": "Around the Horn",
      "shipAddress": {
        "street": "Brook Farm Stratford St. Mary",
        "city": "Colchester",
        "region": "Essex",
        "postalCode": "CO7 6JX",
        "country": "UK"
      },
      "details": [
        {
          "productId": 46,
          "unitPrice": 12,
          "quantity": 28,
          "discount": 0.05
        }
      ]
    },
    {
      "id": 10754,
      "customerId": "MAGAA",
      "employeeId": 6,
      "orderDate": "1997-11-25 00:00:00.000",
      "requiredDate": "1997-12-23 00:00:00.000",
      "shippedDate": "1997-11-27 00:00:00.000",
      "shipVia": 3,
      "freight": 2.38,
      "shipName": "Magazzini Alimentari Riuniti",
      "shipAddress": {
        "street": "Via Ludovico il Moro 22",
        "city": "Bergamo",
        "region": "NULL",
        "postalCode": 24100,
        "country": "Italy"
      },
      "details": [
        {
          "productId": 40,
          "unitPrice": 18.4,
          "quantity": 3,
          "discount": 0
        }
      ]
    },
    {
      "id": 10744,
      "customerId": "VAFFE",
      "employeeId": 6,
      "orderDate": "1997-11-17 00:00:00.000",
      "requiredDate": "1997-12-15 00:00:00.000",
      "shippedDate": "1997-11-24 00:00:00.000",
      "shipVia": 1,
      "freight": 69.19,
      "shipName": "Vaffeljernet",
      "shipAddress": {
        "street": "Smagsloget 45",
        "city": "Århus",
        "region": "NULL",
        "postalCode": 8200,
        "country": "Denmark"
      },
      "details": [
        {
          "productId": 40,
          "unitPrice": 18.4,
          "quantity": 50,
          "discount": 0.2
        }
      ]
    },
    {
      "id": 10765,
      "customerId": "QUICK",
      "employeeId": 3,
      "orderDate": "1997-12-04 00:00:00.000",
      "requiredDate": "1998-01-01 00:00:00.000",
      "shippedDate": "1997-12-09 00:00:00.000",
      "shipVia": 3,
      "freight": 42.74,
      "shipName": "QUICK-Stop",
      "shipAddress": {
        "street": "Taucherstraße 10",
        "city": "Cunewalde",
        "region": "NULL",
        "postalCode": 1307,
        "country": "Germany"
      },
      "details": [
        {
          "productId": 65,
          "unitPrice": 21.05,
          "quantity": 80,
          "discount": 0.1
        }
      ]
    },
    {
      "id": 10770,
      "customerId": "HANAR",
      "employeeId": 8,
      "orderDate": "1997-12-09 00:00:00.000",
      "requiredDate": "1998-01-06 00:00:00.000",
      "shippedDate": "1997-12-17 00:00:00.000",
      "shipVia": 3,
      "freight": 5.32,
      "shipName": "Hanari Carnes",
      "shipAddress": {
        "street": "Rua do Paço 67",
        "city": "Rio de Janeiro",
        "region": "RJ",
        "postalCode": "05454-876",
        "country": "Brazil"
      },
      "details": [
        {
          "productId": 11,
          "unitPrice": 21,
          "quantity": 15,
          "discount": 0.25
        }
      ]
    },
    {
      "id": 10771,
      "customerId": "ERNSH",
      "employeeId": 9,
      "orderDate": "1997-12-10 00:00:00.000",
      "requiredDate": "1998-01-07 00:00:00.000",
      "shippedDate": "1998-01-02 00:00:00.000",
      "shipVia": 2,
      "freight": 11.19,
      "shipName": "Ernst Handel",
      "shipAddress": {
        "street": "Kirchgasse 6",
        "city": "Graz",
        "region": "NULL",
        "postalCode": 8010,
        "country": "Austria"
      },
      "details": [
        {
          "productId": 71,
          "unitPrice": 21.5,
          "quantity": 16,
          "discount": 0
        }
      ]
    },
    {
      "id": 10767,
      "customerId": "SUPRD",
      "employeeId": 4,
      "orderDate": "1997-12-05 00:00:00.000",
      "requiredDate": "1998-01-02 00:00:00.000",
      "shippedDate": "1997-12-15 00:00:00.000",
      "shipVia": 3,
      "freight": 1.59,
      "shipName": "Suprêmes délices",
      "shipAddress": {
        "street": "Boulevard Tirou 255",
        "city": "Charleroi",
        "region": "NULL",
        "postalCode": "B-6000",
        "country": "Belgium"
      },
      "details": [
        {
          "productId": 42,
          "unitPrice": 14,
          "quantity": 2,
          "discount": 0
        }
      ]
    },
    {
      "id": 10782,
      "customerId": "CACTU",
      "employeeId": 9,
      "orderDate": "1997-12-17 00:00:00.000",
      "requiredDate": "1998-01-14 00:00:00.000",
      "shippedDate": "1997-12-22 00:00:00.000",
      "shipVia": 3,
      "freight": 1.1,
      "shipName": "Cactus Comidas para llevar",
      "shipAddress": {
        "street": "Cerrito 333",
        "city": "Buenos Aires",
        "region": "NULL",
        "postalCode": 1010,
        "country": "Argentina"
      },
      "details": [
        {
          "productId": 31,
          "unitPrice": 12.5,
          "quantity": 1,
          "discount": 0
        }
      ]
    },
    {
      "id": 10777,
      "customerId": "GOURL",
      "employeeId": 7,
      "orderDate": "1997-12-15 00:00:00.000",
      "requiredDate": "1997-12-29 00:00:00.000",
      "shippedDate": "1998-01-21 00:00:00.000",
      "shipVia": 2,
      "freight": 3.01,
      "shipName": "Gourmet Lanchonetes",
      "shipAddress": {
        "street": "Av. Brasil 442",
        "city": "Campinas",
        "region": "SP",
        "postalCode": "04876-786",
        "country": "Brazil"
      },
      "details": [
        {
          "productId": 42,
          "unitPrice": 14,
          "quantity": 20,
          "discount": 0.2
        }
      ]
    },
    {
      "id": 10778,
      "customerId": "BERGS",
      "employeeId": 3,
      "orderDate": "1997-12-16 00:00:00.000",
      "requiredDate": "1998-01-13 00:00:00.000",
      "shippedDate": "1997-12-24 00:00:00.000",
      "shipVia": 1,
      "freight": 6.79,
      "shipName": "Berglunds snabbköp",
      "shipAddress": {
        "street": "Berguvsvägen  8",
        "city": "Luleå",
        "region": "NULL",
        "postalCode": "S-958 22",
        "country": "Sweden"
      },
      "details": [
        {
          "productId": 41,
          "unitPrice": 9.65,
          "quantity": 10,
          "discount": 0
        }
      ]
    },
    {
      "id": 10797,
      "customerId": "DRACD",
      "employeeId": 7,
      "orderDate": "1997-12-25 00:00:00.000",
      "requiredDate": "1998-01-22 00:00:00.000",
      "shippedDate": "1998-01-05 00:00:00.000",
      "shipVia": 2,
      "freight": 33.35,
      "shipName": "Drachenblut Delikatessen",
      "shipAddress": {
        "street": "Walserweg 21",
        "city": "Aachen",
        "region": "NULL",
        "postalCode": 52066,
        "country": "Germany"
      },
      "details": [
        {
          "productId": 11,
          "unitPrice": 21,
          "quantity": 20,
          "discount": 0
        }
      ]
    },
    {
      "id": 10807,
      "customerId": "FRANS",
      "employeeId": 4,
      "orderDate": "1997-12-31 00:00:00.000",
      "requiredDate": "1998-01-28 00:00:00.000",
      "shippedDate": "1998-01-30 00:00:00.000",
      "shipVia": 1,
      "freight": 1.36,
      "shipName": "Franchi S.p.A.",
      "shipAddress": {
        "street": "Via Monte Bianco 34",
        "city": "Torino",
        "region": "NULL",
        "postalCode": 10100,
        "country": "Italy"
      },
      "details": [
        {
          "productId": 40,
          "unitPrice": 18.4,
          "quantity": 1,
          "discount": 0
        }
      ]
    },
    {
      "id": 10809,
      "customerId": "WELLI",
      "employeeId": 7,
      "orderDate": "1998-01-01 00:00:00.000",
      "requiredDate": "1998-01-29 00:00:00.000",
      "shippedDate": "1998-01-07 00:00:00.000",
      "shipVia": 1,
      "freight": 4.87,
      "shipName": "Wellington Importadora",
      "shipAddress": {
        "street": "Rua do Mercado 12",
        "city": "Resende",
        "region": "SP",
        "postalCode": "08737-363",
        "country": "Brazil"
      },
      "details": [
        {
          "productId": 52,
          "unitPrice": 7,
          "quantity": 20,
          "discount": 0
        }
      ]
    },
    {
      "id": 10815,
      "customerId": "SAVEA",
      "employeeId": 2,
      "orderDate": "1998-01-05 00:00:00.000",
      "requiredDate": "1998-02-02 00:00:00.000",
      "shippedDate": "1998-01-14 00:00:00.000",
      "shipVia": 3,
      "freight": 14.62,
      "shipName": "Save-a-lot Markets",
      "shipAddress": {
        "street": "187 Suffolk Ln.",
        "city": "Boise",
        "region": "Id",
        "postalCode": 83720,
        "country": "USA"
      },
      "details": [
        {
          "productId": 33,
          "unitPrice": 2.5,
          "quantity": 16,
          "discount": 0
        }
      ]
    },
    {
      "id": 10820,
      "customerId": "RATTC",
      "employeeId": 3,
      "orderDate": "1998-01-07 00:00:00.000",
      "requiredDate": "1998-02-04 00:00:00.000",
      "shippedDate": "1998-01-13 00:00:00.000",
      "shipVia": 2,
      "freight": 37.52,
      "shipName": "Rattlesnake Canyon Grocery",
      "shipAddress": {
        "street": "2817 Milton Dr.",
        "city": "Albuquerque",
        "region": "NM",
        "postalCode": 87110,
        "country": "USA"
      },
      "details": [
        {
          "productId": 56,
          "unitPrice": 38,
          "quantity": 30,
          "discount": 0
        }
      ]
    },
    {
      "id": 10843,
      "customerId": "VICTE",
      "employeeId": 4,
      "orderDate": "1998-01-21 00:00:00.000",
      "requiredDate": "1998-02-18 00:00:00.000",
      "shippedDate": "1998-01-26 00:00:00.000",
      "shipVia": 2,
      "freight": 9.26,
      "shipName": "Victuailles en stock",
      "shipAddress": {
        "street": "2 rue du Commerce",
        "city": "Lyon",
        "region": "NULL",
        "postalCode": 69004,
        "country": "France"
      },
      "details": [
        {
          "productId": 51,
          "unitPrice": 53,
          "quantity": 4,
          "discount": 0.25
        }
      ]
    },
    {
      "id": 10844,
      "customerId": "PICCO",
      "employeeId": 8,
      "orderDate": "1998-01-21 00:00:00.000",
      "requiredDate": "1998-02-18 00:00:00.000",
      "shippedDate": "1998-01-26 00:00:00.000",
      "shipVia": 2,
      "freight": 25.22,
      "shipName": "Piccolo und mehr",
      "shipAddress": {
        "street": "Geislweg 14",
        "city": "Salzburg",
        "region": "NULL",
        "postalCode": 5020,
        "country": "Austria"
      },
      "details": [
        {
          "productId": 22,
          "unitPrice": 21,
          "quantity": 35,
          "discount": 0
        }
      ]
    },
    {
      "id": 10853,
      "customerId": "BLAUS",
      "employeeId": 9,
      "orderDate": "1998-01-27 00:00:00.000",
      "requiredDate": "1998-02-24 00:00:00.000",
      "shippedDate": "1998-02-03 00:00:00.000",
      "shipVia": 2,
      "freight": 53.83,
      "shipName": "Blauer See Delikatessen",
      "shipAddress": {
        "street": "Forsterstr. 57",
        "city": "Mannheim",
        "region": "NULL",
        "postalCode": 68306,
        "country": "Germany"
      },
      "details": [
        {
          "productId": 18,
          "unitPrice": 62.5,
          "quantity": 10,
          "discount": 0
        }
      ]
    },
    {
      "id": 10874,
      "customerId": "GODOS",
      "employeeId": 5,
      "orderDate": "1998-02-06 00:00:00.000",
      "requiredDate": "1998-03-06 00:00:00.000",
      "shippedDate": "1998-02-11 00:00:00.000",
      "shipVia": 2,
      "freight": 19.58,
      "shipName": "Godos Cocina Típica",
      "shipAddress": {
        "street": "C/ Romero 33",
        "city": "Sevilla",
        "region": "NULL",
        "postalCode": 41101,
        "country": "Spain"
      },
      "details": [
        {
          "productId": 10,
          "unitPrice": 31,
          "quantity": 10,
          "discount": 0
        }
      ]
    },
    {
      "id": 10867,
      "customerId": "LONEP",
      "employeeId": 6,
      "orderDate": "1998-02-03 00:00:00.000",
      "requiredDate": "1998-03-17 00:00:00.000",
      "shippedDate": "1998-02-11 00:00:00.000",
      "shipVia": 1,
      "freight": 1.93,
      "shipName": "Lonesome Pine Restaurant",
      "shipAddress": {
        "street": "89 Chiaroscuro Rd.",
        "city": "Portland",
        "region": "OR",
        "postalCode": 97219,
        "country": "USA"
      },
      "details": [
        {
          "productId": 53,
          "unitPrice": 32.8,
          "quantity": 3,
          "discount": 0
        }
      ]
    },
    {
      "id": 10878,
      "customerId": "QUICK",
      "employeeId": 4,
      "orderDate": "1998-02-10 00:00:00.000",
      "requiredDate": "1998-03-10 00:00:00.000",
      "shippedDate": "1998-02-12 00:00:00.000",
      "shipVia": 1,
      "freight": 46.69,
      "shipName": "QUICK-Stop",
      "shipAddress": {
        "street": "Taucherstraße 10",
        "city": "Cunewalde",
        "region": "NULL",
        "postalCode": 1307,
        "country": "Germany"
      },
      "details": [
        {
          "productId": 20,
          "unitPrice": 81,
          "quantity": 20,
          "discount": 0.05
        }
      ]
    },
    {
      "id": 10883,
      "customerId": "LONEP",
      "employeeId": 8,
      "orderDate": "1998-02-12 00:00:00.000",
      "requiredDate": "1998-03-12 00:00:00.000",
      "shippedDate": "1998-02-20 00:00:00.000",
      "shipVia": 3,
      "freight": 0.53,
      "shipName": "Lonesome Pine Restaurant",
      "shipAddress": {
        "street": "89 Chiaroscuro Rd.",
        "city": "Portland",
        "region": "OR",
        "postalCode": 97219,
        "country": "USA"
      },
      "details": [
        {
          "productId": 24,
          "unitPrice": 4.5,
          "quantity": 8,
          "discount": 0
        }
      ]
    },
    {
      "id": 10887,
      "customerId": "GALED",
      "employeeId": 8,
      "orderDate": "1998-02-13 00:00:00.000",
      "requiredDate": "1998-03-13 00:00:00.000",
      "shippedDate": "1998-02-16 00:00:00.000",
      "shipVia": 3,
      "freight": 1.25,
      "shipName": "Galería del gastronómo",
      "shipAddress": {
        "street": "Rambla de Cataluña 23",
        "city": "Barcelona",
        "region": "NULL",
        "postalCode": 8022,
        "country": "Spain"
      },
      "details": [
        {
          "productId": 25,
          "unitPrice": 14,
          "quantity": 5,
          "discount": 0
        }
      ]
    },
    {
      "id": 10891,
      "customerId": "LEHMS",
      "employeeId": 7,
      "orderDate": "1998-02-17 00:00:00.000",
      "requiredDate": "1998-03-17 00:00:00.000",
      "shippedDate": "1998-02-19 00:00:00.000",
      "shipVia": 2,
      "freight": 20.37,
      "shipName": "Lehmanns Marktstand",
      "shipAddress": {
        "street": "Magazinweg 7",
        "city": "Frankfurt a.M.",
        "region": "NULL",
        "postalCode": 60528,
        "country": "Germany"
      },
      "details": [
        {
          "productId": 30,
          "unitPrice": 25.89,
          "quantity": 15,
          "discount": 0.05
        }
      ]
    },
    {
      "id": 10892,
      "customerId": "MAISD",
      "employeeId": 4,
      "orderDate": "1998-02-17 00:00:00.000",
      "requiredDate": "1998-03-17 00:00:00.000",
      "shippedDate": "1998-02-19 00:00:00.000",
      "shipVia": 2,
      "freight": 120.27,
      "shipName": "Maison Dewey",
      "shipAddress": {
        "street": "Rue Joseph-Bens 532",
        "city": "Bruxelles",
        "region": "NULL",
        "postalCode": "B-1180",
        "country": "Belgium"
      },
      "details": [
        {
          "productId": 59,
          "unitPrice": 55,
          "quantity": 40,
          "discount": 0.05
        }
      ]
    },
    {
      "id": 10881,
      "customerId": "CACTU",
      "employeeId": 4,
      "orderDate": "1998-02-11 00:00:00.000",
      "requiredDate": "1998-03-11 00:00:00.000",
      "shippedDate": "1998-02-18 00:00:00.000",
      "shipVia": 1,
      "freight": 2.84,
      "shipName": "Cactus Comidas para llevar",
      "shipAddress": {
        "street": "Cerrito 333",
        "city": "Buenos Aires",
        "region": "NULL",
        "postalCode": 1010,
        "country": "Argentina"
      },
      "details": [
        {
          "productId": 73,
          "unitPrice": 15,
          "quantity": 10,
          "discount": 0
        }
      ]
    },
    {
      "id": 10900,
      "customerId": "WELLI",
      "employeeId": 1,
      "orderDate": "1998-02-20 00:00:00.000",
      "requiredDate": "1998-03-20 00:00:00.000",
      "shippedDate": "1998-03-04 00:00:00.000",
      "shipVia": 2,
      "freight": 1.66,
      "shipName": "Wellington Importadora",
      "shipAddress": {
        "street": "Rua do Mercado 12",
        "city": "Resende",
        "region": "SP",
        "postalCode": "08737-363",
        "country": "Brazil"
      },
      "details": [
        {
          "productId": 70,
          "unitPrice": 15,
          "quantity": 3,
          "discount": 0.25
        }
      ]
    },
    {
      "id": 10905,
      "customerId": "WELLI",
      "employeeId": 9,
      "orderDate": "1998-02-24 00:00:00.000",
      "requiredDate": "1998-03-24 00:00:00.000",
      "shippedDate": "1998-03-06 00:00:00.000",
      "shipVia": 2,
      "freight": 13.72,
      "shipName": "Wellington Importadora",
      "shipAddress": {
        "street": "Rua do Mercado 12",
        "city": "Resende",
        "region": "SP",
        "postalCode": "08737-363",
        "country": "Brazil"
      },
      "details": [
        {
          "productId": 1,
          "unitPrice": 18,
          "quantity": 20,
          "discount": 0.05
        }
      ]
    },
    {
      "id": 10914,
      "customerId": "QUEEN",
      "employeeId": 6,
      "orderDate": "1998-02-27 00:00:00.000",
      "requiredDate": "1998-03-27 00:00:00.000",
      "shippedDate": "1998-03-02 00:00:00.000",
      "shipVia": 1,
      "freight": 21.19,
      "shipName": "Queen Cozinha",
      "shipAddress": {
        "street": "Alameda dos Canàrios 891",
        "city": "Sao Paulo",
        "region": "SP",
        "postalCode": "05487-020",
        "country": "Brazil"
      },
      "details": [
        {
          "productId": 71,
          "unitPrice": 21.5,
          "quantity": 25,
          "discount": 0
        }
      ]
    },
    {
      "id": 10906,
      "customerId": "WOLZA",
      "employeeId": 4,
      "orderDate": "1998-02-25 00:00:00.000",
      "requiredDate": "1998-03-11 00:00:00.000",
      "shippedDate": "1998-03-03 00:00:00.000",
      "shipVia": 3,
      "freight": 26.29,
      "shipName": "Wolski Zajazd",
      "shipAddress": {
        "street": "ul. Filtrowa 68",
        "city": "Warszawa",
        "region": "NULL",
        "postalCode": "01-012",
        "country": "Poland"
      },
      "details": [
        {
          "productId": 61,
          "unitPrice": 28.5,
          "quantity": 15,
          "discount": 0
        }
      ]
    },
    {
      "id": 10907,
      "customerId": "SPECD",
      "employeeId": 6,
      "orderDate": "1998-02-25 00:00:00.000",
      "requiredDate": "1998-03-25 00:00:00.000",
      "shippedDate": "1998-02-27 00:00:00.000",
      "shipVia": 3,
      "freight": 9.19,
      "shipName": "Spécialités du monde",
      "shipAddress": {
        "street": "25 rue Lauriston",
        "city": "Paris",
        "region": "NULL",
        "postalCode": 75016,
        "country": "France"
      },
      "details": [
        {
          "productId": 75,
          "unitPrice": 7.75,
          "quantity": 14,
          "discount": 0
        }
      ]
    },
    {
      "id": 10920,
      "customerId": "AROUT",
      "employeeId": 4,
      "orderDate": "1998-03-03 00:00:00.000",
      "requiredDate": "1998-03-31 00:00:00.000",
      "shippedDate": "1998-03-09 00:00:00.000",
      "shipVia": 2,
      "freight": 29.61,
      "shipName": "Around the Horn",
      "shipAddress": {
        "street": "Brook Farm Stratford St. Mary",
        "city": "Colchester",
        "region": "Essex",
        "postalCode": "CO7 6JX",
        "country": "UK"
      },
      "details": [
        {
          "productId": 50,
          "unitPrice": 16.25,
          "quantity": 24,
          "discount": 0
        }
      ]
    },
    {
      "id": 10934,
      "customerId": "LEHMS",
      "employeeId": 3,
      "orderDate": "1998-03-09 00:00:00.000",
      "requiredDate": "1998-04-06 00:00:00.000",
      "shippedDate": "1998-03-12 00:00:00.000",
      "shipVia": 3,
      "freight": 32.01,
      "shipName": "Lehmanns Marktstand",
      "shipAddress": {
        "street": "Magazinweg 7",
        "city": "Frankfurt a.M.",
        "region": "NULL",
        "postalCode": 60528,
        "country": "Germany"
      },
      "details": [
        {
          "productId": 6,
          "unitPrice": 25,
          "quantity": 20,
          "discount": 0
        }
      ]
    },
    {
      "id": 10936,
      "customerId": "GREAL",
      "employeeId": 3,
      "orderDate": "1998-03-09 00:00:00.000",
      "requiredDate": "1998-04-06 00:00:00.000",
      "shippedDate": "1998-03-18 00:00:00.000",
      "shipVia": 2,
      "freight": 33.68,
      "shipName": "Great Lakes Food Market",
      "shipAddress": {
        "street": "2732 Baker Blvd.",
        "city": "Eugene",
        "region": "OR",
        "postalCode": 97403,
        "country": "USA"
      },
      "details": [
        {
          "productId": 36,
          "unitPrice": 19,
          "quantity": 30,
          "discount": 0.2
        }
      ]
    },
    {
      "id": 10942,
      "customerId": "REGGC",
      "employeeId": 9,
      "orderDate": "1998-03-11 00:00:00.000",
      "requiredDate": "1998-04-08 00:00:00.000",
      "shippedDate": "1998-03-18 00:00:00.000",
      "shipVia": 3,
      "freight": 17.95,
      "shipName": "Reggiani Caseifici",
      "shipAddress": {
        "street": "Strada Provinciale 124",
        "city": "Reggio Emilia",
        "region": "NULL",
        "postalCode": 42100,
        "country": "Italy"
      },
      "details": [
        {
          "productId": 49,
          "unitPrice": 20,
          "quantity": 28,
          "discount": 0
        }
      ]
    },
    {
      "id": 10947,
      "customerId": "BSBEV",
      "employeeId": 3,
      "orderDate": "1998-03-13 00:00:00.000",
      "requiredDate": "1998-04-10 00:00:00.000",
      "shippedDate": "1998-03-16 00:00:00.000",
      "shipVia": 2,
      "freight": 3.26,
      "shipName": "B's Beverages",
      "shipAddress": {
        "street": "Fauntleroy Circus",
        "city": "London",
        "region": "NULL",
        "postalCode": "EC2 5NT",
        "country": "UK"
      },
      "details": [
        {
          "productId": 59,
          "unitPrice": 55,
          "quantity": 4,
          "discount": 0
        }
      ]
    },
    {
      "id": 10955,
      "customerId": "FOLKO",
      "employeeId": 8,
      "orderDate": "1998-03-17 00:00:00.000",
      "requiredDate": "1998-04-14 00:00:00.000",
      "shippedDate": "1998-03-20 00:00:00.000",
      "shipVia": 2,
      "freight": 3.26,
      "shipName": "Folk och fä HB",
      "shipAddress": {
        "street": "Åkergatan 24",
        "city": "Bräcke",
        "region": "NULL",
        "postalCode": "S-844 67",
        "country": "Sweden"
      },
      "details": [
        {
          "productId": 75,
          "unitPrice": 7.75,
          "quantity": 12,
          "discount": 0.2
        }
      ]
    },
    {
      "id": 10950,
      "customerId": "MAGAA",
      "employeeId": 1,
      "orderDate": "1998-03-16 00:00:00.000",
      "requiredDate": "1998-04-13 00:00:00.000",
      "shippedDate": "1998-03-23 00:00:00.000",
      "shipVia": 2,
      "freight": 2.5,
      "shipName": "Magazzini Alimentari Riuniti",
      "shipAddress": {
        "street": "Via Ludovico il Moro 22",
        "city": "Bergamo",
        "region": "NULL",
        "postalCode": 24100,
        "country": "Italy"
      },
      "details": [
        {
          "productId": 4,
          "unitPrice": 22,
          "quantity": 5,
          "discount": 0
        }
      ]
    },
    {
      "id": 10963,
      "customerId": "FURIB",
      "employeeId": 9,
      "orderDate": "1998-03-19 00:00:00.000",
      "requiredDate": "1998-04-16 00:00:00.000",
      "shippedDate": "1998-03-26 00:00:00.000",
      "shipVia": 3,
      "freight": 2.7,
      "shipName": "Furia Bacalhau e Frutos do Mar",
      "shipAddress": {
        "street": "Jardim das rosas n. 32",
        "city": "Lisboa",
        "region": "NULL",
        "postalCode": 1675,
        "country": "Portugal"

      }
    }
];




// let order=orders.find (order => order.id === 10317)
// console.log(order);




// function myAdress(){
//     let count=0;
// for(let item of orders){
//     if(item.shipAddress.country==="USA"){
//     count++
//     }
// }
// console.log(count);
// }

// myAdress()



// let array=[21,34,52,12,345,98,111,23];
// let newArray=[];
// array.forEach((element)=>{
//   if(element>21){
//     newArray.push(element);

//   }
    
// })
// console.log(newArray);

// map
// console.log(array.map(element=>element+10));

// filter
// console.log(array.filter(element=>element>100));

// pop
// let pop=array.pop();
// console.log(pop);

// console.log(array);

// shift

// let shift=array.shift();
// console.log(shift);
// console.log(array);


// unshift

// let unshift=array.unshift(8,9);
// console.log(array);


// split


// let splice=array.splice(2,3,"kivi");
// console.log(array);


// slice

// let slice=array.slice(2,4)
// console.log(slice);
// console.log(array);


// let sum=array.reduce((acumlator,curent)=>acumlator+curent,0);
// console.log(sum);


// let find=array.find(element=>element>=100);
// console.log(find);



// let find=array.findIndex(element=>element>=100);
// console.log(find);

// let some=array.some(element=>element>111);
// console.log(some);


// let  every=array.every(element=>element>111);
// console.log(every);


