from PIL import Image

def resize_image(input_path, output_path, new_width, new_height):
    try:
        # Open the image
        img = Image.open(input_path)
        
        # Resize the image
        resized_img = img.resize((new_width, new_height))
        
        # Save the resized image
        resized_img.save(output_path)
        print("Image resized and saved successfully.")
    except Exception as e:
        print("An error occurred:", e)

# Replace these paths and dimensions with your actual values
input_image_path = "./assests/football.png"
output_image_path = "output.png"
new_width = 90
new_height = 90

resize_image(input_image_path, output_image_path, new_width, new_height)
