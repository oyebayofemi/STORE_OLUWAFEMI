import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { useState, useEffect, createContext } from "react"

// custom components
import BookList from './components/BookList';

// example database of books
const BOOKS_DB = [
  { id: 0, name: "Harry Potter", author: "JK Rowling", price: 18.99 },
  { id: 1, name: "Twilight", author: "Stephanie Meyer", price: 6.50 },
  { id: 2, name: "Atomic Habits", author: "James Clear", price: 24.00 },
]

export const MyContext = createContext()

export default function App() {

  // here is an example of items the user may have in their cart  
  const [cartItems, setCartItems] = useState([])

  const [totalPay, setTotalPay] = useState(0.00)
  const currency = "$"

  return (
    <MyContext.Provider
      value={
        [setCartItems,
          cartItems,
          setTotalPay,
          currency]
      }>
      <SafeAreaView style={styles.container}>
        <View style={styles.inner}>
          <Text style={{ fontSize: 20, textAlign: "center" }}>Welcome to the Bookstore</Text>

          {/* // BookList component */}
          <BookList books={BOOKS_DB} />


          <Text style={{ fontSize: 22, marginBottom: 10 }}>Shopping Cart</Text>
          {/* // programatically outputting the items in the cart */}
          {
            cartItems.map((currItem) => {
              return (
                <View style={{ flexDirection: "row", justifyContent: "space-between" }} key={currItem.title}>
                  <Text style={{ fontSize: 18 }}>{currItem.title} ({currItem.quantity} copies)</Text>
                  <Text style={{ fontSize: 18 }}>{currItem.subtotal}</Text>
                </View>
              )
            })
          }
          {/* TODO: Update this to show the final price the user must pay */}
          <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>You must pay: ${totalPay}</Text>
        </View>
      </SafeAreaView>
    </MyContext.Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: (Platform.OS === "android") ? StatusBar.currentHeight : 0
  },
  inner: {
    margin: 10,
  }

});
