import { ASTNode } from '@solidity-parser/parser/dist/src/ast-types';
import { UmlClass } from './umlClass';
export declare const parseUmlClassesFromFiles: (filesOrFolders: readonly string[], ignoreFilesOrFolders: readonly string[], subfolders?: number) => Promise<UmlClass[]>;
export declare function getSolidityFilesFromFolderOrFiles(folderOrFilePaths: readonly string[], ignoreFilesOrFolders: readonly string[], subfolders?: number): Promise<string[]>;
export declare function getSolidityFilesFromFolderOrFile(folderOrFilePath: string, ignoreFilesOrFolders?: readonly string[], depthLimit?: number): Promise<string[]>;
export declare function parseSolidityFile(fileName: string): ASTNode;
export declare const readFile: (fileName: string, extension?: string) => string;
export declare const isFile: (fileName: string) => boolean;
export declare const isFolder: (fileName: string) => boolean;
