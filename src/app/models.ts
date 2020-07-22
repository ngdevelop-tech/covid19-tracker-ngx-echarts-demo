export interface Country {
    Country: string,
    Slug: string,
    ISO2: string
}

export interface CountryStatus {
    Country: string;
    CountryCode: string;
    Lat: string;
    Lon: string;
    Cases: number;
    Confirmed: number;
    Recovered: number;
    Deaths: number;
    Status: string;
    Date: string;
}