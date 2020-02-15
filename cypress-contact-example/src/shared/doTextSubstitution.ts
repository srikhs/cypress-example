
export default function doTextSubstitution(text: string, substitutionData: any, beginTag: string = "{", endTag: string = "}")
{
  while(substitutionData)
  {
    var start = text.indexOf(beginTag);

    if(start == -1)
      break;

    var end = text.indexOf(endTag, start);

    if(end == -1)
      break;

    var fieldName = text.substr(start + beginTag.length, end - start - beginTag.length);
    var val = substitutionData[fieldName];

    text = text.substr(0, start) + (val ? val : "") + text.substr(end + endTag.length);

    return doTextSubstitution(text, substitutionData);         
  }

  return text;
}