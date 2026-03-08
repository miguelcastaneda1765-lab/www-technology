# Assignment 01 - HTTP Protocol

## Part 1 - Your First GET Request

### Task 1
**A. What type of content did the server return?**  
The server returned the user who created the post, the unique ID of the post, the title of the post, and the content of the post.

**B. Where do you see the resource ID?**  
At the end of the command and in the userID.

**C. Can you see the HTTP status code?**  
No, in this command the HTTP status code doesn’t appear, but if the API returned the userID, ID, title, and body, it indicates that the connection was successful.

---

## Part 2 - Viewing Response Headers

### Task 2
**D. What does 200 mean?**  
It means the connection was successful.

**E. What category of status code is it?**  
It is a successful status code.

**F. What other codes do you know?**  
There are informational codes, redirection codes, client error codes, and server error codes.

### Task 3
**G. What would happen if Content-Type were text/html instead?**  
The server would send a web page.

**H. Does the content-length match the actual size of the body?**  
We need to verify with a command that content-length matches the size of the body.

**I. Why is Connection important in high-traffic systems?**  
Because it indicates whether the connection between the client and the server remains open before the next request.

---

## Part 3 - Simulating HTTP Errors

### Task 4
**J. What status code did you receive?**  
I received a client error code.

**K. Is there a response body?**  
Yes, there is a response body because there was an error in the request.

**L. How does it differ from the successful case?**  
It differs because you do not receive the expected data.

### Task 5
**M. What status code did the server return?**  
It returned a successful code.

**N. What does it mean?**  
It means the action requested was received, understood, and accepted.

**O. What headers appear in this response?**  
Similar headers appear as in the other commands, containing basic response information.

---

## Part 5 - Sending Custom Headers

### Task 6
**P. Does this API actually validate the token?**  
The API doesn’t validate the token because it is only for practice.

**Q. What status code would a real secure API return if the token were invalid?**  
It would return a 401 error.

**R. What is the difference between 401 and 403?**  
401 means the server doesn’t know who you are.  
403 means you are authenticated but not authorized.

---

## Part 6 - Headers Only (No Body)

### Task 7
**S. When would this be useful?**  
When you only need basic response information and not the full object.

**T. Why might monitoring systems use this approach?**  
Because they only need to verify if the server is running.

---

## Part 7 - Status Code Classification

| Code | Category       | Meaning                                                   |
|------|----------------|-----------------------------------------------------------|
| 200  | Success        | OK. The request was received, understood, and accepted.   |
| 201  | Success        | The resource was successfully created.                    |
| 400  | Client Error   | The request is malformed.                                 |
| 401  | Client Error   | The server doesn’t know who you are.                      |
| 403  | Client Error   | You are not authorized.                                   |
| 404  | Client Error   | The resource does not exist.                              |
| 500  | Server Error   | Internal server error.                                    |

---

## Part 8 - Discussion

**V. Why is it bad practice to always return 200, even on errors?**  
Because the client will not know what is actually happening.