import os

# Define folders
folders = [
    'backend',
    'backend/app',
    'backend/app/models',
    'backend/app/src',
    'backend/app/routes',
    'frontend',
    'frontend/pages',
    'saved_models'
]

# Define files
files = [
    'backend/main.py',
    'backend/app/__init__.py',
    'backend/app/models/__init__.py',
    'backend/app/src/__init__.py',
    'backend/app/routes/__init__.py',
    'frontend/app.py',
    'README.md',
    '.env',
    '.gitignore'
]

if __name__=='__main__':
    for folder in folders:
        os.makedirs(folder,exist_ok=True)
    for filepath in files:
        if not os.path.exists(filepath):
            with open(file=filepath, mode='w') as f:
                f.write('')