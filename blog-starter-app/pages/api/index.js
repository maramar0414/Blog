const formValues = { username, subject, email, message };
let result;
try {
  let data = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(formValues),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  result = await data.json();
} catch (error) {
  result = { message: `Failed: ${error.message}` };
}
alert(result.message);