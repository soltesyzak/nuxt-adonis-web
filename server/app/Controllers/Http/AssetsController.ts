import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema } from '@ioc:Adonis/Core/Validator';

import Asset from 'App/Models/Asset';

export default class AssetsController {
    public index = async () => {
        return Asset.all(); // SELECT * FROM mysql_db.assets
    }

    public store = async ({ request, response }: HttpContextContract) => {
        const newAssetSchema = schema.create({
            country: schema.string({ trim: true }),
            city: schema.string({ trim: true }),
            area: schema.number(),
            description: schema.string({ trim: true }),
            type: schema.string({ trim: true }),
            numberOfRooms: schema.number(),
            value: schema.number(),
        })

        const payload = await request.validate({schema: newAssetSchema});

        const asset = await Asset.create(payload); // create instance and save 

        response.status(201);

        return asset;
    }

    public show = async ({ params }: HttpContextContract) => {
        return Asset.findOrFail(params.id);
    }

    public update = async ({ params, request }: HttpContextContract) => {
        const body = request.body();
        const asset = await Asset.findOrFail(params.id);
        const fields = Object.keys(body);

        fields.forEach((key) => {
            if (body[`${key}`]) {
                asset[`${key}`] = body[`${key}`];
            }
        });

        return asset.save();
    }

    public destroy = async ({ params }: HttpContextContract) => {
        const asset = await Asset.findOrFail(params.id);
        await asset.delete();

        return asset;
    }
}
