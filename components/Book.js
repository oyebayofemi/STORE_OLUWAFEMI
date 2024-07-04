
import { View, Text, StyleSheet, TextInput, Button } from "react-native"
import { MyContext } from "../App"
import { useContext, useState } from "react"

// TODO: This component needs to use React Context to update the
// App.js shopping cart items

const Book = (props) => {

    // TODO: Logic goes here
    const [setCartItems, cartItems, setTotalPay, currency] = useContext(MyContext)
    const [copies, setCopies] = useState("")

    const addButton = () => {

        const subTotalCopies = copies.toString() * props.price

        const itemToAdd = { title: props.title, quantity: copies, subtotal: subTotalCopies }
        addToCartList(itemToAdd)

    }

    const addToCartList = (itemToAdd) => {
        const itemIndex = cartItems.findIndex((item) => item.title === itemToAdd.title)

        let subtotalSum = 0;


        if (itemIndex !== -1) {
            const updatedCartItems = [...cartItems]
            updatedCartItems[itemIndex].quantity = itemToAdd.quantity
            updatedCartItems[itemIndex].subtotal = itemToAdd.subtotal
            setCartItems(updatedCartItems)

            // console.log(updatedCartItems)

            for (let i = 0; i < updatedCartItems.length; i++) {
                subtotalSum += updatedCartItems[i].subtotal;
            }

            setTotalPay(subtotalSum)

        } else {
            const updatedCartItems = [...cartItems, itemToAdd]


            for (let i = 0; i < updatedCartItems.length; i++) {
                subtotalSum += updatedCartItems[i].subtotal;
            }

            setTotalPay(subtotalSum)

            setCartItems(updatedCartItems)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.bookInfo}>
                <Text>Name: {props.title}</Text>
                <Text>Author: {props.author}</Text>
                <Text>Price: {currency}{props.price}</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputBox}
                    keyboardType='numeric'
                    value={copies}
                    onChangeText={setCopies}
                />

                <Button
                    title="ADD"
                    onPress={addButton}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 12,
        borderColor: "gray",
        flexDirection: "row"
    },
    bookInfo: {
        flex: 1,
    },
    inputBox: {
        borderWidth: 1, borderColor: "black", padding: 10, width: 50
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center"
    }

})
export default Book