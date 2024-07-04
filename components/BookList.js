
import { View, StyleSheet } from "react-native"

import Book from "./Book"

const BookList = (props) => {

    return (
        <View style={styles.container}>
            {
                props.books.map((currItem) => {
                    return <Book
                        key={currItem.id}
                        title={currItem.name}
                        author={currItem.author}
                        price={currItem.price} />
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginBottom: 30,
    }
})
export default BookList