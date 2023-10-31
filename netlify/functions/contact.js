exports.handler = async (event) => {
    const { name, phone, email, subject, message } = JSON.parse(event.body);

    // Send an email using an email service or library (e.g., Nodemailer for Node.js)

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Form submitted successfully" }),
    };
};