import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Content, Text } from 'native-base';
import { useHistory } from 'react-router-native';
import { logoutUser, getUser } from '../network';

const Account = ({ user, setToken }) => {
    const history = useHistory();

    const handleLogOut = async () => {
        const res = await logoutUser();

        if (res) {
            setToken(null);
            history.push('/');
            alert(res.message);
        }
    };

    useEffect(() => {
        (async () => {
            const result = await getUser();
            console.log(result);
            // setPost(result.post);
        })();
    }, []);

    return (
        <Container style={styles.container}>
            <Content
                contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text style={styles.text}>Name: {user.username}</Text>
                <Text style={styles.text}>Email: {user.email}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        handleLogOut();
                    }}
                >
                    <Text style={styles.buttonText}>LogOut</Text>
                </TouchableOpacity>
            </Content>
        </Container>
    );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#F26F20',
        padding: 10,
        margin: '10%',
        width: 200,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFF',
    },
    text: {
        textAlign: 'center',
        paddingBottom: 20,
        fontSize: 30,
    },
});
export default Account;
