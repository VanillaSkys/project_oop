# from selenium import webdriver
from RegisterAuthor import RegisterAuthor
from Cartoon import Cartoon

url = "http://localhost:5000"
# # Initialize the WebDriver
# driver = webdriver.Chrome()  # Assuming you're using Chrome, you can change it to Firefox, Safari, etc.

# # Navigate to a webpage
# driver.get("http://localhost:5000")

# # Print the page title
# print("Page Title:", driver.title)

# # Close the browser
# driver.quit()

register_author = RegisterAuthor(f'{url}/register_author')
response = register_author.add()
print(response)
cartoon = Cartoon(f'{url}/post_cartoon')
cartoon.add()