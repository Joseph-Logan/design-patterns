import { beforeEach, describe, expect, it, vi } from 'vitest'
import { XMLBuilder, JSONBuilder } from '../index'

describe('XML Builder, incompatible with the client code', () => {
  let xmlBuilder: XMLBuilder
  beforeEach(() => {
    xmlBuilder = new XMLBuilder()
  })

  it('should throw an error if XMLBuilder has not a makeXML function', () => {
    expect(xmlBuilder).property('convertTo')
  })

  it('should throw an error if convertTo does not return an string with Making a xml document content...', () => {
    vi.spyOn(xmlBuilder, 'convertTo')
    const mock = vi.fn().mockImplementation(xmlBuilder.convertTo)
    mock()
    expect(mock).toHaveReturnedWith('Converting to XML...')
  })
})

describe('JSON Builder, incompatible with the client code', () => {
  let jsonBuilder: JSONBuilder
  beforeEach(() => {
    jsonBuilder = new JSONBuilder()
  })

  it('should throw an error if JSONBuilder has not a makeXML function', () => {
    expect(jsonBuilder).property('convertTo')
  })

  it('should throw an error if makeXML does not return an string with Making a xml document content...', () => {
    vi.spyOn(jsonBuilder, 'convertTo')
    const mock = vi.fn().mockImplementation(jsonBuilder.convertTo)
    mock()
    expect(mock).toHaveReturnedWith('Converting to JSON...')
  })
})