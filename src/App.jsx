import React, { Component } from 'react'
import './App.css'


/*

Author: _beta admin team

AUFGABE/TASK

Deutsch/German:

Gegeben sind folgende Informationen:
Es gibt x Benutzer-Accounts mit jeweils einem Vornamen und einem Nachnamen.
Zu einem Account existieren y Bestellungen. Eine Bestellung beinhaltet z Artikel mit jeweils einer Beschreibung und einem Preis.

Erstelle eine Datenstruktur aus den unten gegebenen Informationen.
Sortiere die Informationen zuerst nach dem Nachnamen (aufsteigend (A -> Z)), dann die Bestellungen anhand der Nummerierung (aufsteigend) und zuletzt die Artikel nach dem Preis (absteigend).
Zeige die Informationen in einer Tabelle an.


Beispieldaten:

Max Mustermann
  - Bestellung 1
    - Schreibtisch (249,99 €)
    - Stuhl (129,99 €)
Peter Mueller
  - Bestellung 3
    - Monitor (239,79 €)
  - Bestellung 1
    - Maus (49,49 €)
    - Tastatur (120,00 €)
  - Bestellung 2
    - Mikrofasertuch (7,49 €)
    - Teppich (300,00 €)
    - Mauspad (29,50 €)
Julia Vogt
  - Bestellung 2:
    - Laptop Tragetasche (39,99 €)
    - Laptop (742,90 €)
  - Bestellung 1:
    - Handy-Ladekabel (13,90 €)
Jan Acker
  - Bestellung 1:
    - Schuhe (83,00 €)
    - Wintermantel (139,99 €)
  - Bestellung 2:
    - Hose (69,99 €)
    - Pullover (69,99 €)
Hans Schulz
  - Bestellung 1
    - Rucksack (239,79 €)
  - Bestellung 3
    - Maus (49,49 €)
    - Tastatur (120,00 €)
    - Mauspad (29,50 €)
  - Bestellung 2
    - Mikrofasertuch (7,49 €)
    - Halskette (300,00 €)


Hinweise:
  - Das Styling der Tabelle ist nicht vorgeschrieben.

Augenmerk der Challenge:
- Erstellung der Datenstruktur
- Sortierung von Daten
- Verknüpfung von Daten und UI
- Bonus: Styling UI

Beispiel UI:

Vorname | Nachname   | Bestellung | Artikelbeschreibung | Preis
------------------------------------------------------------------
...
Peter   | Mueller    | 1          | Tastatur            | 120,00 €
Peter   | Mueller    | 1          | Maus                |  49,49 €
Peter   | Mueller    | 2          | Teppich             | 300,00 €
Peter   | Mueller    | 2          | Mauspad             |  29,50 €
Peter   | Mueller    | 2          | Mikrofasertuch      |   7,49 €
Peter   | Mueller    | 3          | Monitor             | 239,79 €
Max     | Mustermann | 1          | Schreibtisch        | 249,99 €
Max     | Mustermann | 1          | Stuhl               | 129,99 €
...


Englisch/English

The following information is given:
There are x user accounts, each with a first name and a last name.
There are y orders for an account. An order contains z items, each with a description and a price.

Create a data structure from the information given below.
Sort the information first by last name (ascending (A -> Z)), then the orders by number (ascending) and finally the items by price (descending).
Display the information in a table.


Example data:

Max Mustermann
  - Order 1
    - Desk (249,99 €)
    - chair (129,99 €)
Peter Mueller
  - Order 3
    - monitor (239,79 €)
  - Order 1
    - mouse (49,49 €)
    - keyboard (120,00 €)
  - Order 2
    - microfiber cloth (7,49 €)
    - carpet (300,00 €)
    - mouse pad (29,50 €)
Julia Vogt
  - Order 2:
    - Laptop carrying case (39,99 €)
    - laptop (742,90 €)
  - Order 1:
    - Cell phone charging cable (13,90 €)
Jan Acker
  - Order 1:
    - shoes (83,00 €)
    - Winter coat (139,99 €)
  - Order 2:
    - trousers (69,99 €)
    - sweater (69,99 €)
Hans Schulz
  - Order 1
    - backpack (239,79 €)
  - Order 3
    - mouse (49,49 €)
    - keyboard (120,00 €)
    - mouse pad (29,50 €)
  - Order 2
    - microfiber cloth (7,49 €)
    - necklace (300,00 €)


Notes:
  - The styling of the table is not mandatory.

Attention of the Challenge:
- Creation of the data structure
- Sorting of data
- Linking data and UI
- Bonus: Styling UI

Example UI:

first name | last name  | order | item description | price
------------------------------------------------------------------
...
Peter      | Mueller    | 1     | Keyboard         | 120,00 €
Peter      | Mueller    | 1     | Mouse            |  49,49 €
Peter      | Mueller    | 2     | Carpet           | 300,00 €
Peter      | Mueller    | 2     | Mouse pad        |  29,50 €
Peter      | Mueller    | 2     | Microfiber cloth |   7,49 €
Peter      | Mueller    | 3     | Monitor          | 239,79 €
Max        | Mustermann | 1     | Desk             | 249,99 €
Max        | Mustermann | 1     | Chair            | 129,99 €
...

*/




export default class App extends Component {

  state = {
    user: [
      {
        firstName: "Peter",
        lastName: "Mueller",
        transaction: [
          {
            userId: 1,
            idTransaction: 1,
            item: [ "Keyboard", "Mouse"],
            price: [120.00, 49.49]
          },
          {
            userId:1,
            idTransaction: 2,
            item: [ "Carpet", "Mouse Pad", "Microfiber cloth"],
            price: [300, 29.50, 7.49]
          },
          {
            userId: 1,
            idTransaction: 3,
            item: ["Monitor"],
            price: [239.79]
          }
        ]
      },
      {
        firstName: "Max",
        lastName: "Musterman",
        transaction:[
          {
            userId: 2,
            idTransaction: 1,
            item: ["Desk", "Chair"],
            price: [249.99, 129.99]
          }
        ]
      }
    ],
    
  }


  renderTransaction = () => {
    var result = []
    for (let i = 0; i < this.state.user.length; i++) {
      for (let j = 0; j < this.state.user[i].transaction.length; j++) {
              var jsx = this.state.user[i].transaction[j].item.map((val, idx) => {
                return (
                  <tr>
                    <td>{this.state.user[i].firstName}</td>
                    <td>{this.state.user[i].lastName}</td>
                    <td>{this.state.user[i].transaction[j].idTransaction}</td>
                    <td>{val}</td>
                    <td>{this.state.user[i].transaction[j].price[idx]}</td>
                  </tr>
                ) 
              })
              result.push(jsx) 
      }
    }
    return result
  }

  render = () => {
    return (
      <div>
        <table>
          <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Order</th>
                <th>Item Description</th>
                <th>Price</th>
              </tr>
          </thead>
          <tbody>
              <tr></tr>
              {this.renderTransaction()}
          </tbody>
        </table>
      </div>
    )
  }
}