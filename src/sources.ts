
export interface MaliciousPkg {
    name: string;
    versions: string[];
    reason: string;
}

export const maliciousPkgs: MaliciousPkg[] = [
    {
        name: 'ua-parser-js',
        versions: ['0.7.29', '0.8.0', '1.0.0'],
        reason: 'Contains malicious code related to mining',
    },
    {
        name: 'coa',
        versions: ['>2.0.2'],
        reason: 'Versions above 2.0.2 contain malicious code',
    },
];