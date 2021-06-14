users = [
    {
        "first_name": "Brain",
        "last_name": "Mohr",
        "age": 54
    },
    {
        "first_name": "Bella",
        "last_name": "VonRueden",
        "age": 17
    },
    {
        "first_name": "Franz",
        "last_name": "Raynor",
        "age": 28
    },
    {
        "first_name": "Celestino",
        "last_name": "Bailey",
        "age": 61
    }
]

def helloUsers(users):
    allUsers = []
    for user in users:
        allUsers.append("My name is " + user["first_name"] + " "+ str(user["age"]) + " " + "and I am years old")
    return allUsers


print(helloUsers(users))   