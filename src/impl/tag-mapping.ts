/**
 * Created by roobm on 16.05.2017.
 * Mapping from normalized tag names to placeholder names.
 */

/*
copied from https://github.com/angular/angular/blob/master/packages/compiler/src/i18n/serializers/placeholder.ts
 */
const TAG_TO_PLACEHOLDER_NAMES: {[k: string]: string} = {
    'A': 'LINK',
    'B': 'BOLD_TEXT',
    'BR': 'LINE_BREAK',
    'EM': 'EMPHASISED_TEXT',
    'H1': 'HEADING_LEVEL1',
    'H2': 'HEADING_LEVEL2',
    'H3': 'HEADING_LEVEL3',
    'H4': 'HEADING_LEVEL4',
    'H5': 'HEADING_LEVEL5',
    'H6': 'HEADING_LEVEL6',
    'HR': 'HORIZONTAL_RULE',
    'I': 'ITALIC_TEXT',
    'LI': 'LIST_ITEM',
    'LINK': 'MEDIA_LINK',
    'OL': 'ORDERED_LIST',
    'P': 'PARAGRAPH',
    'Q': 'QUOTATION',
    'S': 'STRIKETHROUGH_TEXT',
    'SMALL': 'SMALL_TEXT',
    'SUB': 'SUBSTRIPT',
    'SUP': 'SUPERSCRIPT',
    'TBODY': 'TABLE_BODY',
    'TD': 'TABLE_CELL',
    'TFOOT': 'TABLE_FOOTER',
    'TH': 'TABLE_HEADER_CELL',
    'THEAD': 'TABLE_HEADER',
    'TR': 'TABLE_ROW',
    'TT': 'MONOSPACED_TEXT',
    'U': 'UNDERLINED_TEXT',
    'UL': 'UNORDERED_LIST',
};

export class TagMapping {

    public getStartTagPlaceholderName(tag: string): string {
        const upperTag = tag.toUpperCase();
        const baseName = TAG_TO_PLACEHOLDER_NAMES[upperTag] || `TAG_${upperTag}`;
        return `START_${baseName}`;
    }

    public getCloseTagPlaceholderName(tag: string): string {
        const upperTag = tag.toUpperCase();
        const baseName = TAG_TO_PLACEHOLDER_NAMES[upperTag] || `TAG_${upperTag}`;
        return `CLOSE_${baseName}`;
    }

    public getTagnameFromStartTagPlaceholderName(placeholderName: string): string {
        if (placeholderName.startsWith('START_TAG_')) {
            return placeholderName.substring('START_TAG_'.length).toLowerCase();
        } else if (placeholderName.startsWith('START_')) {
            const ph = placeholderName.substring('START_'.length);
            let matchKey = Object.keys(TAG_TO_PLACEHOLDER_NAMES).find((key) => TAG_TO_PLACEHOLDER_NAMES[key] === ph);
            return matchKey ? matchKey.toLowerCase() : null;
        }
        return null;
    }

    public getTagnameFromCloseTagPlaceholderName(placeholderName: string): string {
        if (placeholderName.startsWith('CLOSE_TAG_')) {
            return placeholderName.substring('CLOSE_TAG_'.length).toLowerCase();
        } else if (placeholderName.startsWith('CLOSE_')) {
            const ph = placeholderName.substring('CLOSE_'.length);
            let matchKey = Object.keys(TAG_TO_PLACEHOLDER_NAMES).find((key) => TAG_TO_PLACEHOLDER_NAMES[key] === ph);
            return matchKey ? matchKey.toLowerCase() : null;
        }
        return null;
    }
}