export interface KanaItem {
    id: string;
    char: string;
    romaji: string;
    type: 'hiragana' | 'katakana';
    group: 'a' | 'ka' | 'sa' | 'ta' | 'na' | 'ha' | 'ma' | 'ya' | 'ra' | 'wa' | 'n';
}