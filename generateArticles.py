import sys
from PIL import Image
import glob

imagePaths = glob.glob('./images/thumbs/*.jpg')

for imagePath in imagePaths:
    image = Image.open(imagePath)
    imageShortPath = imagePath.split('/')[-1]
    print '<article class="item thumb" data-width="{}"><a href="images/fulls/{}" class="image"><img src="images/thumbs/{}" alt=""></a></article>'.format(image.size[0], imageShortPath, imageShortPath)
