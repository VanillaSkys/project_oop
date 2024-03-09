# from selenium import webdriver
from Author import Author
from Cartoon import Cartoon
from Chapter import Chapter

url = "http://localhost:5000"
# # Initialize the WebDriver
# driver = webdriver.Chrome()  # Assuming you're using Chrome, you can change it to Firefox, Safari, etc.

# # Navigate to a webpage
# driver.get("http://localhost:5000")

# # Print the page title
# print("Page Title:", driver.title)

# # Close the browser
# driver.quit()

# register_author = Author(f'{url}/register_author')
# register_author.add()
# cartoon = Cartoon(f'{url}/post_cartoon')
# cartoon.add()
chapter = Chapter(f'{url}/post_chapter')
chapter.add()