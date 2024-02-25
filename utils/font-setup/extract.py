import re
import requests
import os
from os.path import dirname, join
current_dir = dirname(__file__)
file_path = join(current_dir, "./fira-sans.css")

font_output_dir = join(current_dir, 'fonts')
font_links_path = join(current_dir, 'links.txt')

if not os.path.exists(font_output_dir):
   os.makedirs(font_output_dir)

with open(file_path, "r") as fp:
    with open(font_links_path, "w") as out:
      for text in fp:
        match = re.search(r'(http.*?)\)', text, re.IGNORECASE)
        if match is not None:
          out.write(match.group(1)+"\n")

with open(font_links_path, 'r') as links:
   for link in links:
      r = requests.get(link.strip(), allow_redirects=True, stream=True)
      file_name = link.rsplit("/", 1)[-1].strip()
      with open(join(font_output_dir, file_name), "wb") as font:
         for chunk in r.iter_content():
            font.write(chunk)