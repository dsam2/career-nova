import os
import re

scripts_dir = 'career-nova-export/scripts'
all_files = []
for root, dirs, files in os.walk(scripts_dir):
    for f in files:
        if f.endswith(('.js', '.mjs')):
            all_files.append(os.path.join(root, f))

print(f"Scanning {len(all_files)} script files...")
for p in all_files:
    with open(p, 'r', encoding='utf-8', errors='ignore') as fl:
        content = fl.read()
    
    matches = []
    if 'Get in touch' in content:
        matches.append('Get in touch')
    if 'Pricing' in content:
        matches.append('Pricing')
    if 'Case Studies' in content:
        matches.append('Case Studies')
    if 'Made by Flux' in content or 'Flux' in content:
        matches.append('Flux')
        
    if matches:
        print(f"{p}: {matches}")
