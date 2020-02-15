export class LocaleService {
  private currentLocale: string;

  constructor() {
    this.currentLocale = "en-us";
  }

  public getLocaleContent(locale?: string): { [key: string]: any } {
    locale = locale || this.currentLocale;
    const content = require("../content/" + locale + ".json");
    return content;
  }

  public getCategoryContent(category: string, locale?: string): { [key: string]: string } {
    const content = this.getLocaleContent(locale);
    const categoryContent = content[category];
    return categoryContent;
  }

  public getText(category: string, id: string, locale?: string): string {
    const categoryContent = this.getCategoryContent(category, locale);
    if (categoryContent === undefined) {
      return null;
    }

    const text = categoryContent[id];
    return text;
  }
}

const localeService = new LocaleService();
export default localeService;
