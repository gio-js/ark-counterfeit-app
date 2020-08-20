export class StorageService {
    get LoginPassphrase(): string {
        return localStorage.getItem('LoginPassphrase');
    }
    set LoginPassphrase(value: string) {
        localStorage.setItem('LoginPassphrase', value);
    }
}