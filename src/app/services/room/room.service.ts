import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  UserName: string;
}

export interface Room {
  Id: string;
  Users: User[];
  WorkItems: number[];
}
export interface Fields {
    'System.AreaPath': string;
    'System.TeamProject': string;
    'System.IterationPath': string;
    'System.WorkItemType': string;
    'System.State': string;
    'System.Reason': string;
    'System.AssignedTo': string;
    'System.CreatedDate': Date;
    'System.CreatedBy': string;
    'System.ChangedDate': Date;
    'System.ChangedBy': string;
    'System.Title': string;
    'Microsoft.VSTS.Common.Activity': string;
    'System.Tags': string;
    'System.BoardColumn': string;
    'Microsoft.VSTS.Common.BacklogPriority?': number;
    'Microsoft.VSTS.Common.Severity': string;
    'WEF_5ABAA3A8E9BD4510BB29C00C9F2381B5_Kanban.Column': string;
    'Microsoft.VSTS.TCM.ReproSteps': string;
    'Microsoft.VSTS.Common': string;
}

export interface Attributes {
  isLocked: boolean;
  authorizedDate?: Date;
  id?: number;
  resourceCreatedDate?: Date;
  resourceModifiedDate?: Date;
  revisedDate?: Date;
  name: string;
}

export interface Relation {
  rel: string;
  url: string;
  attributes: Attributes;
}

export interface Self {
    href: string;
}

export interface WorkItemUpdates {
    href: string;
}

export interface WorkItemRevisions {
    href: string;
}

export interface WorkItemHistory {
    href: string;
}

export interface Html {
    href: string;
}

export interface WorkItemType {
    href: string;
}

export interface Fields2 {
    href: string;
}

export interface Links {
    self: Self;
    workItemUpdates: WorkItemUpdates;
    workItemRevisions: WorkItemRevisions;
    workItemHistory: WorkItemHistory;
    html: Html;
    workItemType: WorkItemType;
    fields: Fields2;
}

export interface WorkItem {
    id: number;
    rev: number;
    fields: Fields;
    relations: Relation[];
    _links: Links;
    url: string;
    cols: number;
    rows: number;
}

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(private http: HttpClient) {}

  private roomApiUrl = 'https://localhost:5001/api/room?roomNumber=';  // URL to web api
  private workItemApiUrl = 'https://localhost:5001/api/workitem?workItemNumber=';  // URL to web api
  getRoom (roomNumber: number) {
    return this.http.get<Room>(this.roomApiUrl + roomNumber);
  }
  getWorkitem(roomNumber: number) {
    return this.http.get<WorkItem>(this.workItemApiUrl + roomNumber);
  }
}
