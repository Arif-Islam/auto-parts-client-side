

const addUser = user => {

    const email = user?.user?.email;
    // const name = user?.displayName;
    const currentUser = { email: email };

    if (email) {
        fetch(`https://pure-inlet-40571.herokuapp.com/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('user data', data);
            })
    }
}

export default addUser;