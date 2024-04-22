import {View, StyleSheet } from "react-native"

const Center = ({ children }) => {
    return (
        <View style={styles.center}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Center