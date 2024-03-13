import requests
import os

# Function to download image from a given URL
def download_image(url, folder_name='chapter'):
    # Create the folder if it doesn't exist
    if not os.path.exists(folder_name):
        os.makedirs(folder_name)

    # Get the image name from the URL
    image_name = os.path.join(folder_name, f"{download_image.counter:01d}.jpg")
    download_image.counter += 1

    # Send a GET request to the image URL
    response = requests.get(url)

    # Check if the request was successful
    if response.status_code == 200:
        # Write the content to the image file
        with open(image_name, 'wb') as f:
            f.write(response.content)
        print(f"Image downloaded successfully: {image_name}")
    else:
        print(f"Failed to download image from: {url}")

# Set initial counter
download_image.counter = 0

# Folder name
folder_name = 'chapter'

# Create the folder if it doesn't exist
if not os.path.exists(folder_name):
    os.makedirs(folder_name)

# Loop through image URLs from 1001 to 1104
for i in range(40, 88):
    # URL of the image
    url = f'https://img.oremanga.net/2022/10/f3/B29VK64ASM-16655053{i}.jpg'
    
    # Download the image into the folder
    download_image(url, folder_name)
