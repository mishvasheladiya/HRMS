<?php
$host = "localhost";
$username = "root";
$password = "";
$db = "users";

// Create connection
$conn = new mysqli($host, $username, $password, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['username'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // SQL query to check the user
    $sql = "SELECT * FROM users WHERE email = ? AND password = ? LIMIT 1";

    // Prepare and bind parameters
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $email, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if a user exists with the provided credentials
    if ($result->num_rows == 1) {
        echo "You Have Successfully Logged in";
        header("Location: index.html");
        exit();
    } else {
        echo "You Have Entered Incorrect Password";
        exit();
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - HRMS</title>
    <link rel="stylesheet" href="form.css">
</head>
<body>
    <main>
        <section class="auth-form">
            <h1>Login</h1>
            <form action="#" method="POST">
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" required>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
                <button type="submit" class="signup-button">Login</button>
            </form>
            <p>Don't have an account? <a href="signup.html">Sign Up</a></p>
        </section>
    </main>
</body>
</html>
