import * as htmlParser from "html-react-parser";
import * as React from "react";
import localeService from "src/services/LocaleService";
import doTextSubstitution from "src/shared/doTextSubstitution";

interface ITextProps {
  category: string;
  id: string;
  substitutionData?: { [key: string]: any };
}

export default class Text extends React.Component<ITextProps> {
  public render() {
    const localeContent = localeService.getLocaleContent();

    if (!localeContent) {
      return null;
    }

    const category = localeContent[this.props.category];
    const text = category ? category[this.props.id] : null;

    if (!text) {
      return <span />;
    }

    if (text) {
      return htmlParser(doTextSubstitution(text, this.props.substitutionData));
    }

    return this.props.children;
  }
}
