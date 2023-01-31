import gspread
from oauth2client.service_account import ServiceAccountCredentials
import pandas as pd

# Connect to Google Sheets
def update_sheet_numbers(file_size):
    scope = ['https://www.googleapis.com/auth/spreadsheets',
            "https://www.googleapis.com/auth/drive"]

    credentials = ServiceAccountCredentials.from_json_keyfile_name("C:/Users/Eier/Documents/Github/Datatidy/backend/database/gs_credentials.json", scope)
    client = gspread.authorize(credentials)

    sheet = client.open("Database_Datatidy").sheet1

    values = sheet.get_values()

    rows = [[int(values[1][0])+1,int(values[1][1])+1,int(values[1][2])+file_size]]
    df = pd.DataFrame(rows, columns=['users', 'projects', 'data'])

    sheet.update([df.columns.values.tolist()] + df.values.tolist())

    return

def get_sheet_numbers():
    scope = ['https://www.googleapis.com/auth/spreadsheets',
            "https://www.googleapis.com/auth/drive"]

    credentials = ServiceAccountCredentials.from_json_keyfile_name("C:/Users/Eier/Documents/Github/Datatidy/backend/database/gs_credentials.json", scope)
    client = gspread.authorize(credentials)

    sheet = client.open("Database_Datatidy").sheet1

    values = sheet.get_values()

    return values[1]


get_sheet_numbers()
