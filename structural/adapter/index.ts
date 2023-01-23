interface FormatConverter {
  convertTo: () => string
  type: string
}

export class XMLBuilder implements FormatConverter {
  public type: string = 'XML'

  convertTo = (): string => {
    return 'Converting to XML...'
  }
}

export class JSONBuilder implements FormatConverter {
  public type: string = 'JSON'

  convertTo = (): string => {
    return 'Converting to JSON...'
  }
}

export class XMLJSONAdapter <Type extends FormatConverter> {
  public type: string

  constructor ({ type }: Type) {
    this.type = type
  }

  convertTo = (converter: Type): string => {
    return `Converting ${this.type} to ${converter.type}...`
  }
}

const xmlBuilderAdaptee = new XMLBuilder()
const jsonBuilderAdaptee = new JSONBuilder()

const convertXMLToJSON = new XMLJSONAdapter<XMLBuilder>(xmlBuilderAdaptee)
const convertJSONToXML = new XMLJSONAdapter<JSONBuilder>(jsonBuilderAdaptee)

const convertedToJSON = convertXMLToJSON.convertTo(jsonBuilderAdaptee)
console.log(convertedToJSON)

const convertedToXML = convertJSONToXML.convertTo(xmlBuilderAdaptee)
console.log(convertedToXML)
