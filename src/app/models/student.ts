export interface Student {
    createdAt: string;
    name: string;
    avatar: string;
    id: string;
    gender: string;
    mobile: string;
    email: string;
    batch: number;
    address: {
        city: string;
        mandal: string;
        district: string;
        state: string;
        pincode: string;
    };
    education: {
        qualification: string | null;
        year: number | null;
        percentage: string;
    }[];
    company: {
        name: string;
        location: string;
        package: string;
        offerDate: string;
    };
    sourceType: string;
    sourceFrom: string;
    educationalDetails: any[]; // Specify the type if known
    sourceForm: string;
    Refer: string | null;
    type: string;
    referral: string | null;
    text: string | null;
    educationdetails: any[]; // Specify the type if known
    referralName: string;
}
