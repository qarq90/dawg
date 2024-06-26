import {NextResponse} from "next/server";
import connect from "@/lib/connection.js";
import Games from "@/models/Games.js";

export const POST = async (request) => {
    try {
        const {email_id, game_id, game_name} = await request.json();

        await connect();

        const isGameDocument = await Games.findOne({email_id});

        if (isGameDocument) {
            const updatedDocument = await Games.updateOne(
                {email_id},
                {$push: {liked_games: [{game_id: game_id, game_name: game_name}]}}
            );
            return NextResponse.json({
                message: 'Document Updated Successfully',
                status: true,
                result: updatedDocument,
            });
        } else {
            const newDocument = await Games.create({
                email_id,
                wishlisted_games: [],
                liked_games: [{game_id: game_id, game_name: game_name}],
                owned_games: [],
            });
            return NextResponse.json({
                message: 'New Document Created Successfully',
                status: true,
                result: newDocument,
            });
        }
    } catch (error) {
        console.error('Error creating or updating document:', error);
        return NextResponse.json({
            message: 'Failed to create or update document',
            status: false,
            error: error.message,
        });
    }
};
