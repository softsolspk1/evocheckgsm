import pandas as pd
import json
import os
from datetime import datetime

# This script would ideally interface with the backend API or direct DB connection
# For this environment, we'll generate a JSON seed file from Excel that can be used by Prisma seed.

def excel_to_seed():
    df = pd.read_excel('data.xlsx', header=1)
    
    # Process Cities and Areas
    # Based on the inspection, the column is actually 'Region' for city-level data in this context
    cities = df['Region'].dropna().unique().tolist()
    
    seed_data = {
        "cities": [],
        "users": [],
        "patients": []
    }
    
    for city_name in cities:
        seed_data["cities"].append({"name": str(city_name)})
        
    # Process KAMs - The column is 'KAM/DE Name'
    kams = df[['KAM/DE Name', 'KAM/DE Employee Code']].drop_duplicates().dropna()
    for _, kam in kams.iterrows():
        seed_data["users"].append({
            "name": kam['KAM/DE Name'],
            "employeeCode": str(kam['KAM/DE Employee Code']),
            "role": "KAM",
            "email": f"{kam['KAM/DE Employee Code']}@pharmevo.biz",
            "password": "hashed_password_123" # In real script, hash this
        })

    # Save to json file for Prisma
    with open('cgm-backend/prisma/seed.json', 'w') as f:
        json.dump(seed_data, f, indent=2)
    
    print("Seed data generated successfully in cgm-backend/prisma/seed.json")

if __name__ == "__main__":
    excel_to_seed()
