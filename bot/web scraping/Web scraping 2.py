import os
import requests
from bs4 import BeautifulSoup

# Function to download image from a given URL
def download_image(url, folder_name='Chapter'):
    # Create the folder if it doesn't exist
    if not os.path.exists(folder_name):
        os.makedirs(folder_name)

    # Set initial image counter
    global image_counter
    # Construct the image name with the current value of the image counter
    image_name = os.path.join(folder_name, f"{image_counter}.jpg")

    # Send a GET request to the image URL
    response = requests.get(url)

    # Check if the request was successful
    if response.status_code == 200:
        # Write the content to the image file
        with open(image_name, 'wb') as f:
            f.write(response.content)
        print(f"Image downloaded successfully: {image_name}")
        # Increment image counter
        image_counter += 1
    else:
        print(f"Failed to download image from: {url}")

# URL of the webpage
url = 'https://www.mangago.me/read-manga/the_bequeathed/uu/to_chapter-1/pg-1/'

# Send a GET request to the URL
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find all img tags
    img_tags = soup.find_all('.webp')

    # Set initial image counter
    image_counter = 0

    # Extract image URLs and download each image
    for img_tag in img_tags:
        # Check if the img tag has the 'src' attribute
        if 'src' in img_tag.attrs:
            img_url = img_tag['src']
            # Check if the data-src attribute ends with '.jpg'
            if img_url.endswith('.jpg'):
                # Download the image into the "chapter" folder
                download_image(img_url, folder_name='Chapter')
else:
    print(f"Failed to fetch webpage: {url}")
