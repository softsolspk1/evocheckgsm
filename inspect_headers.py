import pandas as pd
try:
    df = pd.read_excel('data.xlsx', header=0)
    print("Headers:", df.columns.tolist())
    print("First few rows:")
    print(df.head(10))
except Exception as e:
    print("Error:", e)
