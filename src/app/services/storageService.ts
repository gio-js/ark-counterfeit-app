export class StorageService {
    get LoginPassphrase(): string {
        return localStorage.getItem('LoginPassphrase');
    }
    set LoginPassphrase(value: string) {
        localStorage.setItem('LoginPassphrase', value);
    }

    get LoginUsername(): string {
        return localStorage.getItem('LoginUsername');
    }
    set LoginUsername(value: string) {
        localStorage.setItem('LoginUsername', value);
    }
}