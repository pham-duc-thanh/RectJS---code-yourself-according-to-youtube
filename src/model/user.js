export default function createUser (props) {
    const { id, fullname, username, email, phone} = props;
    return {
        id: id,
        fullname: fullname,
        username: username,
        email: email,
        phone: phone
    }
}